import { z } from "zod"

export const inputParamsSchema = {
  "people_id": z.number().int().describe("The person's id"),
  "expand": z.string().describe("Comma-delimited values expands the response with additional fields: `account`,  `managers`, and `contracts`").optional()
}