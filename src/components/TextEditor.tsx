import Markdown from "marked-react";
import Editor from "@monaco-editor/react";
import type { Dispatch, SetStateAction } from "react";

interface Props {
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
}

const TextEditor = ({ message, setMessage }: Props) => {
  function handleEditorChange(value: string | undefined) {
    setMessage(value ?? "");
  }

  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <div className="w-full md:w-1/2">
        <Editor
          className="h-[300px] md:h-[500px]"
          defaultLanguage="markdown"
          theme="vs-dark"
          onChange={handleEditorChange}
        />
      </div>
      <div
        id="markdown"
        className="relative max-h-[500px] w-full overflow-y-auto font-sans text-sm md:w-1/2"
      >
        <h3 className="sticky top-0 bg-white font-category2">Email Preview</h3>
        <Markdown value={message} />
      </div>
    </div>
  );
};

export default TextEditor;
