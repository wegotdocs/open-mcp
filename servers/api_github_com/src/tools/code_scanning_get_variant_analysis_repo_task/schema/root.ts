import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the controller repository."),
  "codeql_variant_analysis_id": z.number().int().describe("The ID of the variant analysis."),
  "repo_owner": z.string().describe("The account owner of the variant analysis repository. The name is not case sensitive."),
  "repo_name": z.string().describe("The name of the variant analysis repository.")
}