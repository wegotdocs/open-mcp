import { z } from "zod"

export const inputParamsSchema = {
  "team": z.number().int().describe("Filter by team ID")
}