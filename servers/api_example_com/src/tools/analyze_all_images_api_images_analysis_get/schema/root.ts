import { z } from "zod"

export const inputParamsSchema = {
  "team_filter": z.union([z.string(), z.null()]).describe("Filter by team (dai, foundation, platform)").optional(),
  "tag_type_filter": z.union([z.string(), z.null()]).describe("Filter by tag type (version, sha, branch, latest)").optional()
}