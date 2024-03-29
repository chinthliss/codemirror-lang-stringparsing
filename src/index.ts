import {parser} from "./stringparsing.grammar"
import {LRLanguage, LanguageSupport, indentNodeProp, foldNodeProp, foldInside, delimitedIndent} from "@codemirror/language"

export const stringParsingLanguage = LRLanguage.define({
    parser: parser.configure({
        props: [
            indentNodeProp.add({
                Application: delimitedIndent({closing: "]", align: false})
            }),
            foldNodeProp.add({
                Application: foldInside
            })
        ]
    }),
    languageData: {
        commentTokens: {line: ";"}
    }
})

export function stringParsing() {
    return new LanguageSupport(stringParsingLanguage)
}