import { z } from "zod"

export const inputParamsSchema = {
  "projectId": z.string().regex(new RegExp("^[a-zA-z0-9_]+$")).optional(),
  "projectIdOrName": z.string().optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}