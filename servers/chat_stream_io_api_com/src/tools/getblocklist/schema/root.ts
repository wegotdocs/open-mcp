import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Block list name"),
  "team": z.string().optional()
}