import { z } from "zod"

export const inputParamsSchema = {
  "issueIds": z.array(z.number().int().describe("A list of issue IDs.")).describe("A list of issue IDs."),
  "jqls": z.array(z.string().describe("A list of JQL queries.")).describe("A list of JQL queries.")
}