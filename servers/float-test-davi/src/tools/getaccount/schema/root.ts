import { z } from "zod"

export const inputParamsSchema = {
  "account_id": z.number().int().describe("The account ID"),
  "expand": z.string().describe("Use `people_id` to return an additional `people_id` field that can reference a record on `/people`, or `null` if a guest").optional()
}