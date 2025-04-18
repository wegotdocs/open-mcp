import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Name of the project"),
  "body": z.string().nullable().describe("Body of the project").optional()
}