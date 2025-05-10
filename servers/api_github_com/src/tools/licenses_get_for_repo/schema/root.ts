import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "ref": z.string().describe("The Git reference, formatted as `refs/pull/<number>/merge`, `refs/pull/<number>/head`,\n`refs/heads/<branch name>` or simply `<branch name>`.").optional()
}