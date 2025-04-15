import { z } from "zod"

export const inputParamsSchema = {
  "selectedIssueIdsOrKeys": z.array(z.string()).describe("List of issue IDs or keys which are to be bulk watched or unwatched. These IDs or keys can be from different projects and issue types.")
}