import { styleTags, tags as t } from "@lezer/highlight";

export const stringParsingHighlighting = styleTags({
    "Number": t.number,
    "lookup": t.literal,
    "math": t.operator,
    "command": t.processingInstruction,
    "comment": t.comment
});

import { HighlightStyle, syntaxHighlighting } from "@codemirror/language";
const syntax_colors = syntaxHighlighting(
    HighlightStyle.define(
        [
            { tag: t.processingInstruction, color: "#db47b8" },
            { tag: t.literal, color: "#7b87b8" },
            { tag: t.operator, color: "#ab87b8" },
            { tag: t.number, color: "#0b67b8" },
            { tag: t.comment, color: "#585858" }
        ],
        { all: { color: "#787878" } }
    )
);

export let extensions = [syntax_colors];
