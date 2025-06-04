import { z } from "zod"

export const inputParamsSchema = {
  "directoryId": z.string().uuid().describe("Directory UUID"),
  "limit": z.number().describe("Number of documents per page").optional(),
  "page": z.number().describe("Request a specific page").optional()
}