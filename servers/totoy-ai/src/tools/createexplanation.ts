import { z } from "zod"

export const toolName = `createexplanation`
export const toolDescription = `Explains a document in any language`
export const baseUrl = `https://api.totoy.ai/v1`
export const path = `/explanation`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "output_language",
    "language_level",
    "source_id",
    "messages",
    "markdown_response"
  ]
}
export const flatMap = {}

export const inputParams = {
  "output_language": z.enum(["ar","bs","cs","de","es","en","fa","fr","hr","hu","it","pl","ro","sk","sl","sr","tl","tr","uk","zh"]).describe("The ISO 639-1 code for the language in which the `Explanation` should be generated.\nSupported Languages:\n- ar: Arabic\n- bs: Bosnian\n- cs: Czech\n- de: German\n- es: Spanish\n- en: English\n- fa: Farsi\n- fr: French\n- hr: Croatian\n- hu: Hungarian\n- it: Italian\n- pl: Polish\n- ro: Romanian\n- sk: Slovak\n- sl: Slovenian\n- sr: Serbian\n- tl: Tagalog\n- tr: Turkish\n- uk: Ukrainian\n- zh: Mandarin\n"),
  "language_level": z.enum(["simple","plain","detailed"]).describe("One of three language levels for the generated text:\n1. Simple Language: Answers are short and simple, using easy words and a clear structure.\n2. Plain Language: Answers are short and the assistant explains complicated terms.\n3. Detailed Language: Answers are not simplified and the assistant answers in detail.\n"),
  "source_id": z.string().regex(new RegExp("^src_[a-zA-Z0-9]{25}$")).max(29).describe("The unique identifier of the uploaded `Source` to be used as context for the `Explanation`."),
  "messages": z.array(z.object({ "role": z.enum(["user","assistant"]).describe("The entity that produced the message. One of `user` or `assistant`."), "content": z.string().max(16000).describe("The content of the message. The maximum length is 16,000 characters."), "references": z.array(z.object({ "text": z.string().max(8).describe("String in the message content that needs to be replaced."), "source_id": z.string().regex(new RegExp("^src_[a-zA-Z0-9]{25}$")).max(29).describe("What `Source` the generated answer depended on."), "page_number": z.number().int().gte(1).lte(1000).nullable().describe("The page number in the `Source` the generated answer depended on. Only applicable for documents.").optional(), "backlink": z.string().max(512).describe("The backlink of the `Source`, so it can be called from the client.").optional(), "custom_metadata": z.record(z.any()).describe("Custom optional metadata for a `Source` provided by a client. Up to 10 key-value pairs.").optional() }).strict().describe("Represents a reference to a `Source` that was used to generate the answer.\nThe reference is used to provide backlinks to the original source and to provide context for the generated answer.\n")).max(50).optional() }).strict().describe("Represents a message within an `Explanation` or a `Knowledge Base Chat`.\nFor `Explanations` - An `assistant` message is either an initial `Explanation` for the document when no messages were provided in the request or an answer to a user message in the provided conversation history.\n")).max(50).describe("The conversation history. For an initial `Explanation` just provide an empty array or no messages. For follow-up questions, provide the entire conversation history.").optional(),
  "markdown_response": z.boolean().describe("Whether the response should be returned as Markdown formatted text. If 'false', the response will be returned in plain text.").optional()
}