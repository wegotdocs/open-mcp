import { z } from "zod"

export const inputParamsSchema = {
  "milestone_id": z.number().int().describe("The ID of this milestone").readonly().optional(),
  "name": z.string().max(200).describe("The name of the milestone"),
  "project_id": z.number().int().describe("The project that this milestone belongs to"),
  "phase_id": z.number().int().describe("The phase that this milestone belongs to").optional(),
  "date": z.string().describe("Start date of the milestone"),
  "end_date": z.string().describe("End date of the milestone if more than 1 day").optional(),
  "created": z.string().describe("Date this record was created").readonly().optional(),
  "modified": z.string().describe("Date this record was last modified").readonly().optional()
}