import React, { useEffect } from "react";
import TokenPart from "~/components/tokenPart/tokenPart";
import { useJwtStore } from "~/store/jwtStore";
import { isValidJWT } from "~/utils/jwt";
import { notifyError } from "~/utils/notify";

const Decoder: React.FC = () => {
  const jwt = useJwtStore((state) => state.jwt);
  const jwtDecoded = useJwtStore((state) => state.jwtDecoded);
  const setJwtDecoded = useJwtStore((state) => state.setJwtDecoded);

  const decodeJWT = async (jwt: string) => {
    if (isValidJWT(jwt)) {
      try {
        const response = await fetch("/api/decodeJwt", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: jwt }),
        });

        const data = (await response.json()) as { decoded: typeof jwtDecoded };

        if (data?.decoded) {
          setJwtDecoded(data.decoded);
        }
      } catch (error) {
        console.error("Erreur lors du décodage du JWT :", error);
      }
    } else {
      notifyError("Invalid JWT");
    }
  };

  useEffect(() => {
    const run = async () => {
      if (jwt) {
        await decodeJWT(jwt);
      }
    };

    run().catch((error) => console.error("Erreur dans useEffect:", error));
  }, [jwt, setJwtDecoded]);

  return (
    <div className="flex h-full w-full flex-col gap-8  [&>div]:h-fit">
      {jwtDecoded && (
        <>
          <TokenPart
            title={"Header"}
            object={JSON.stringify(jwtDecoded.header)}
          />
          <TokenPart
            title={"Payload"}
            object={JSON.stringify(jwtDecoded.payload)}
          />
          <TokenPart
            title={"Signature"}
            object={JSON.stringify(jwtDecoded.signature)}
          />
        </>
      )}
    </div>
  );
};

export default Decoder;
