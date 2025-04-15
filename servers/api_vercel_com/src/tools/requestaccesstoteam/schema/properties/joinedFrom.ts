import { z } from "zod"

export const inputParams = {
  "origin": z.enum(["import","teams","github","gitlab","bitbucket","feedback","organization-teams"]).describe("The origin of the request."),
  "commitId": z.string().describe("The commit sha if the origin is a git provider.").optional(),
  "repoId": z.string().describe("The ID of the repository for the given Git provider.").optional(),
  "repoPath": z.string().describe("The path to the repository for the given Git provider.").optional(),
  "gitUserId": z.string().describe("The ID of the Git account of the user who requests access.").optional(),
  "gitUserLogin": z.string().describe("The login name for the Git account of the user who requests access.").optional()
}