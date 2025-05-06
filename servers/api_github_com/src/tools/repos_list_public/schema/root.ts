import { z } from "zod"

export const inputParamsSchema = {
  "since": z.number().int().describe("A repository ID. Only return repositories with an ID greater than this ID.").optional()
}