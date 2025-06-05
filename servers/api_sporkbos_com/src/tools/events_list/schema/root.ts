import { z } from "zod"

export const inputParamsSchema = {
  "end": z.string().describe("Filter by date range - YYYY-MM-DD").optional(),
  "is_paginated": z.boolean().optional(),
  "page_no": z.number().int().describe("A page number within the paginated result set.").optional(),
  "page_size": z.number().int().describe("Number of results to return per page.").optional(),
  "start": z.string().describe("Filter by date range - YYYY-MM-DD").optional(),
  "team": z.number().int().describe("Filter events by a specific team ID")
}