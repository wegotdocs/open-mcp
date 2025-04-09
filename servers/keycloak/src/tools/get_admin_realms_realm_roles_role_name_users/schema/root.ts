import { z } from "zod"

export const inputParams = {
  "role-name": z.string().describe("the role name."),
  "briefRepresentation": z.boolean().describe("Boolean which defines whether brief representations are returned (default: false)").optional(),
  "first": z.number().int().describe("first result to return. Ignored if negative or {@code null}.").optional(),
  "max": z.number().int().describe("maximum number of results to return. Ignored if negative or {@code null}.").optional()
}