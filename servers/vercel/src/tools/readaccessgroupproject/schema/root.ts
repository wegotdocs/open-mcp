import { z } from "zod"

export const inputParamsSchema = {
  "accessGroupIdOrName": z.string(),
  "projectId": z.string(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}