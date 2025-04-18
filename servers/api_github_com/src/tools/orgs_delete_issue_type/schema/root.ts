import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "issue_type_id": z.number().int().describe("The unique identifier of the issue type.")
}