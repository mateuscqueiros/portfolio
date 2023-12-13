import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

hljs.registerLanguage("javascript", javascript);

export function syntaxHighlighting(data: string) {
  const syntaxhighlighted = hljs.highlight(data, {
    language: "javascript",
  }).value;

  return syntaxhighlighted;
}
