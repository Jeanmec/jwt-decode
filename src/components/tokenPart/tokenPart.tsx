import prettyJSON from "json-stringify-pretty-compact";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";

import { TokenPartWrapper } from "./tokenPart.style";

import { IoCopy } from "react-icons/io5";

// Ajoutez la syntaxe JSON à PrismLight

const TokenPart = ({ part }) => {
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(JSON.stringify(JSON.parse(part), null, 2))
      .then(() => {
        toast.success("Copied to clipboard", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          isLoading: false,
        });
      })
      .catch((error) => {
        // Gérer les erreurs ici, par exemple en affichant un message d'erreur avec toast.error()
        console.error("Error copying to clipboard:", error);
      });
  };

  const syntaxHighlight = (json) => {
    if (!json) return ""; //no JSON from response

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
      <div className="w-fibg-slate-100 relative h-full w-9/12 backdrop-opacity-10">
        <div className="my-2 h-fit max-h-40 w-full overflow-y-scroll rounded-2xl border-2 border-gray-800 bg-[#0000001a] px-6 py-4">
          <pre
            dangerouslySetInnerHTML={{
              __html: syntaxHighlight(
                prettyJSON(JSON.parse(part), { maxLength: 0, indent: 5 }),
              ),
            }}
          />
          <button
            className="fixed right-4 top-2 text-slate-200"
            onClick={copyToClipboard}
          >
            <IoCopy />
          </button>
        </div>
      </div>
    </TokenPartWrapper>
  );
};

export default TokenPart;
