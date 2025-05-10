import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "b_id": z.string().nullable().describe("The ID associated with this skill").optional(),
  "name": z.string().nullable().describe("The name associated with this skill").optional(),
  "maximum_proficiency": z.string().optional(),
  "minimum_proficiency": z.string().optional(),
  "x-account-id": z.string().describe("The account identifier")
}