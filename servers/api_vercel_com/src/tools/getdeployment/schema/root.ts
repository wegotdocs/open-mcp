import { z } from "zod"

export const inputParams = {
  "idOrUrl": z.string().describe("The unique identifier or hostname of the deployment."),
  "withGitRepoInfo": z.string().describe("Whether to add in gitRepo information.").optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}