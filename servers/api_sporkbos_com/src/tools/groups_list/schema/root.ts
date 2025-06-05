import { z } from "zod"

export const inputParamsSchema = {
  "is_paginated": z.boolean().optional(),
  "name": z.string().optional(),
  "name_contains": z.string().optional(),
  "name_ends_with": z.string().optional(),
  "name_equals": z.string().optional(),
  "name_match_all": z.boolean().optional(),
  "name_not_contains": z.string().optional(),
  "name_not_equals": z.string().optional(),
  "name_starts_with": z.string().optional(),
  "owner": z.string().optional(),
  "page_no": z.number().int().describe("A page number within the paginated result set.").optional(),
  "page_size": z.number().int().describe("Number of results to return per page.").optional(),
  "status_contains": z.string().optional(),
  "status_ends_with": z.string().optional(),
  "status_equals": z.string().optional(),
  "status_match_all": z.boolean().optional(),
  "status_not_contains": z.string().optional(),
  "status_not_equals": z.string().optional(),
  "status_starts_with": z.string().optional(),
  "team": z.number().optional()
}