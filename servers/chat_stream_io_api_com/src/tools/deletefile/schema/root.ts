import { z } from "zod"

export const inputParamsSchema = {
  "type": z.string().describe("The type of file"),
  "id": z.string().describe("File ID"),
  "url": z.string().describe("File URL to delete").optional()
}