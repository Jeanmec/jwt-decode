import React from "react";
import prettyJSON from "json-stringify-pretty-compact";
import { TokenPartWrapper } from "./tokenPart.style";
import { IoCopy } from "react-icons/io5";
import { notifySuccess } from "~/utils/notify";

interface TokenPartProps {
  title: string;
  object: string;
}

const TokenPart: React.FC<TokenPartProps> = ({ object, title }) => {
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(JSON.stringify(JSON.parse(object), null, 2))
      .then(() => {
        notifySuccess("Copied to clipboard");
      })
      .catch((error) => {
        console.error("Error copying to clipboard:", error);
      });
  };

  const syntaxHighlight = (json: string) => {
    if (!json) return "";

    json = json
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    return json.replace(
      /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
      function (match) {
        let cls = "number";
        if (match.startsWith('"')) {
          if (match.endsWith(":")) {
            cls = "key";
          } else {
            cls = "string";
          }
        } else if (/true|false/.test(match)) {
          cls = "boolean";
        } else if (/null/.test(match)) {
          cls = "null";
        }
        return '<span class="' + cls + '">' + match + "</span>";
      },
    );
  };

  return (
    <TokenPartWrapper>
      <div className=" h-full w-full backdrop-opacity-10">
        <div className="mb-1 flex items-center justify-between">
          <h2 className="font-bold text-slate-100">{title}</h2>
          <button
            className="mr-2 text-xl text-slate-200"
            onClick={copyToClipboard}
          >
            <IoCopy />
          </button>
        </div>
        <div className="relative h-fit max-h-40 w-full overflow-y-auto rounded-xl border-2 border-gray-800 bg-[#0000001a] px-6 py-4">
          <pre
            dangerouslySetInnerHTML={{
              __html: syntaxHighlight(
                prettyJSON(JSON.parse(object), { maxLength: 0, indent: 5 }),
              ),
            }}
          />
        </div>
      </div>
    </TokenPartWrapper>
  );
};

export default TokenPart;
