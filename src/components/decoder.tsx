import React from "react";
import TokenPart from "~/components/tokenPart/tokenPart";

interface DecoderProps {
  header: Record<string, any> | null;
  payload: Record<string, any> | null;
}

const Decoder: React.FC<DecoderProps> = ({ header, payload }) => {
  return (
    header &&
    payload && (
      <div className="flex h-full w-full flex-col overflow-hidden">
        <TokenPart part={JSON.stringify(header)} />
        <TokenPart part={JSON.stringify(payload)} />
      </div>
    )
  );
};

export default Decoder;
