# StringParsing language support for CodeMirror 

A [Lezer](https://lezer.codemirror.net/) grammar module to add support for StringParsing to CoreMirror.

Present limitations:
* Doesn't look at comparison statements (in if and case) in detail. They're just matched as a single item.
* For open case comparisons, there needs to be a space after the test. E.g. 'case[[value]> ]'. Without the end space, the final bracket conflicts with ending mathematical operations. 