import { z } from "zod"

export const inputParams = {
  "id": z.string().describe("The ID of the deployment to be deleted"),
  "url": z.string().describe("A Deployment or Alias URL. In case it is passed, the ID will be ignored").optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}