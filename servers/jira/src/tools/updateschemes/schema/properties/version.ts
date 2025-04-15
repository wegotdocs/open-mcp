import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The version UUID.").optional(),
  "versionNumber": z.number().int().describe("The version number.").optional()
}