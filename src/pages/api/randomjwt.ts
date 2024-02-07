import { type NextApiRequest, type NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { generate } from "random-words";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const randomObject = generateRandomObject();

  const randomJwtSignature = generate({ min: 1, max: 5 }).join("-");

  const token = jwt.sign(randomObject, randomJwtSignature);

  res.status(200).json({ token });
}

const generateRandomObject = (): Record<string, string> => {
  const keys = generate({ min: 200, max: 500 });

  const randomObject: Record<string, string> = {};

  keys.forEach((key) => {
    const generatedValue = generate()[0]!;
    randomObject[key] = generatedValue;
  });

  return randomObject;
};
