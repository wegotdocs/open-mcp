import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique identifier for the document. Either the UUID or the urlId is acceptable."),
  "title": z.string().describe("The title of the document.").optional(),
  "text": z.string().describe("The body of the document in markdown.").optional(),
  "append": z.boolean().describe("If true the text field will be appended to the end of the existing document, rather than the default behavior of replacing it. This is potentially useful for things like logging into a document.").optional(),
  "publish": z.boolean().describe("Whether this document should be published and made visible to other team members, if a draft").optional(),
  "done": z.boolean().describe("Whether the editing session has finished, this will trigger any notifications. This property will soon be deprecated.").optional()
}