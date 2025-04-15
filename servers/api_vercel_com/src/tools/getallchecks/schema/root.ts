import { z } from "zod"

export const inputParams = {
  "deploymentId": z.string().describe("The deployment to get all checks for"),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}