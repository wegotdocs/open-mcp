import { z } from "zod"

export const inputParamsSchema = {
  "repositoryName": z.string().describe("The repository name."),
  "id": z.string().describe("The r_object_id of queried object."),
  "format": z.string().describe("Specifies the format name of the specific content or rendition.").optional(),
  "page": z.number().int().describe("Specifies the page number of the specific content or rendition.").optional(),
  "modifier": z.string().describe("Specifies the page modifier of the specific rendition.").optional()
}