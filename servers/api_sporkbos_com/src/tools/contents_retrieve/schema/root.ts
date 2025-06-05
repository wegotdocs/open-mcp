import { z } from "zod"

export const inputParamsSchema = {
  "ulid": z.string(),
  "team": z.number().int().describe("Filter content by team ID")
}