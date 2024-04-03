import { styleTags, tags as t } from "@lezer/highlight";

export const stringParsingHighlighting = styleTags({
    "command/...": t.processingInstruction,
    "lookup/...": t.keyword,
    "control": t.controlKeyword,
    "math": t.arithmeticOperator,
    "comment": t.comment,
    "parameter": t.number,
    "variable": t.variableName,
    "comparison": t.compareOperator
});

/*
 These styles don't actually do anything in the package and aren't exported.
 They're to allow being lazy using the testing playground.
 */
import { HighlightStyle, syntaxHighlighting } from "@codemirror/language";
const syntax_colors = syntaxHighlighting(
    HighlightStyle.define(
        [
            { tag: t.keyword, color: "#7b87b8" },
            { tag: t.controlKeyword, color: "#f8835c" },
            { tag: t.processingInstruction, color: "#8b00ff" },
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
