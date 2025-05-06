import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "analysis_id": z.number().int().describe("The ID of the analysis, as returned from the `GET /repos/{owner}/{repo}/code-scanning/analyses` operation.")
}