import { z } from "zod"

export const inputParamsSchema = {
  "model": z.enum(["rre-de-2025-02-14","rre-de-2025-03-31","rre-de-2025-04-07","rre-de"]).describe("The name of the model that will be used for the extraction. A model name without a date is an alias to the latest version of that model, i.e. `rre-de` always points to the latest version of `rre-de`."),
  "document": z.string().describe("Base64-encoded contents of a document (PDF, JPG or PNG)"),
  "expand_abbreviations": z.boolean().describe("If set to true, the extraction will expand abbreviations in the extracted fields.").optional()
}