import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { json } from "react-syntax-highlighter/dist/cjs/languages/hljs";
import prettyJSON from "json-stringify-pretty-compact";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";

import { TokenPartWrapper } from "./tokenPart.style";

import { IoCopy } from "react-icons/io5";

// Ajoutez la syntaxe JSON à PrismLight
SyntaxHighlighter.registerLanguage("json", json);

export default function tokenPart({ part }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(JSON.parse(part), null, 2));
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
  };

  return (
    <TokenPartWrapper>
      <div className="w-fibg-slate-100 relative h-full w-9/12 backdrop-opacity-10">
        <div className="my-2 h-fit max-h-40 w-full overflow-scroll rounded-2xl border-2 border-gray-800 bg-[#0000001a] px-6 py-4">
          <SyntaxHighlighter language="json" style={{}}>
            {prettyJSON(JSON.parse(part), { maxLength: 0, indent: 5 })}
          </SyntaxHighlighter>
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
}
