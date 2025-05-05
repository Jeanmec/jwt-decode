import { type NextApiRequest, type NextApiResponse } from "next";
import {
  type IJWTHeader,
  type IJWTPayload,
  type IDecodedJWT,
} from "../interfaces/jwt";

const decodeJWT = (token: string): IDecodedJWT | null => {
  try {
    const [headerB64, payloadB64, signature] = token.split(".");

    if (!headerB64 || !payloadB64 || !signature) {
      throw new Error("Invalid JWT format");
    }

    const decodeBase64Url = <T>(b64url: string): T => {
      const base64 = b64url.replace(/-/g, "+").replace(/_/g, "/");
      const json = atob(base64);
      return JSON.parse(decodeURIComponent(escape(json))) as T;
    };

    const header = decodeBase64Url<IJWTHeader>(headerB64);
    const payload = decodeBase64Url<IJWTPayload>(payloadB64);

    return {
      header,
      payload,
      signature,
    };
  } catch (error) {
    console.error("Error decoding JWT:", error);
    return null;
  }
};

export default function handler(
  req: NextApiRequest & { body: DecodeJwtRequestBody },
  res: NextApiResponse,
) {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ error: "Token is required" });
  }

  const decodedJWT = decodeJWT(token as string);

  if (!decodedJWT) {
    return res.status(400).json({ error: "Invalid JWT" });
  }

  return res.status(200).json({ decoded: decodedJWT });
}
