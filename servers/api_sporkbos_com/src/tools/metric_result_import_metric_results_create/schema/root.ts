import { z } from "zod"

export const inputParamsSchema = {
  "content": z.number().int().describe("ID of the content to import results for"),
  "team": z.number().int().describe("ID of the team"),
  "file": z.string().url()
}