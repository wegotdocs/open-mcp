import { z } from "zod"

export const inputParams = {
  "id": z.string().describe("Filter out secrets based on comma separated secret ids.").optional(),
  "projectId": z.string().describe("Filter out secrets that belong to a project.").optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}