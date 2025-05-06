import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "dir": z.string().describe("The alternate path to look for a README file"),
  "ref": z.string().describe("The name of the commit/branch/tag. Default: the repository’s default branch.").optional()
}