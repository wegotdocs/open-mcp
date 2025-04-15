import { z } from "zod"

export const inputParamsSchema = {
  "from": z.string().describe("Query only projects updated after the given timestamp").optional(),
  "gitForkProtection": z.enum(["1","0"]).describe("Specifies whether PRs from Git forks should require a team member's authorization before it can be deployed").optional(),
  "limit": z.string().describe("Limit the number of projects returned").optional(),
  "search": z.string().describe("Search projects by the name field").optional(),
  "repo": z.string().describe("Filter results by repo. Also used for project count").optional(),
  "repoId": z.string().describe("Filter results by Repository ID.").optional(),
  "repoUrl": z.string().describe("Filter results by Repository URL.").optional(),
  "excludeRepos": z.string().describe("Filter results by excluding those projects that belong to a repo").optional(),
  "edgeConfigId": z.string().describe("Filter results by connected Edge Config ID").optional(),
  "edgeConfigTokenId": z.string().describe("Filter results by connected Edge Config Token ID").optional(),
  "deprecated": z.boolean().optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}