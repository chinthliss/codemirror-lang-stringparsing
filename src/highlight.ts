import { styleTags, tags as t } from "@lezer/highlight";

export const stringParsingHighlighting = styleTags({
    "lookup": t.controlKeyword,
    "command": t.processingInstruction,
    "math": t.arithmeticOperator,
    "comment": t.comment,
    "parameter": t.number,
    "variable": t.variableName,
    "comparison": t.compareOperator
});

import { HighlightStyle, syntaxHighlighting } from "@codemirror/language";
const syntax_colors = syntaxHighlighting(
    HighlightStyle.define(
        [
            { tag: t.controlKeyword, color: "#7b87b8" },
            { tag: t.processingInstruction, color: "#fb87b8" },
            { tag: t.arithmeticOperator, color: "#ab87b8" },
            { tag: t.comment, color: "#585858" },
            { tag: t.number, color: "#0b67b8" },
            { tag: t.variableName, color: "#0bb867" },
            { tag: t.compareOperator, color: "#b8b80b" }
        ],
        { all: { color: "#787878" } }
    )
);

export let extensions = [syntax_colors];
