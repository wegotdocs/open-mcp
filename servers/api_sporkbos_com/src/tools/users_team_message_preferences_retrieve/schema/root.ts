import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Filter users by name").optional(),
  "team": z.number().int().describe("Filter users by team ID")
}