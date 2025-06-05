import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this user."),
  "end": z.string().describe("Filter by date range - YYYY-MM-DD"),
  "is_meeting": z.boolean().describe("Filter by meetings").optional(),
  "start": z.string().describe("Filter by date range - YYYY-MM-DD"),
  "team": z.number().int().describe("Filter by team ID")
}