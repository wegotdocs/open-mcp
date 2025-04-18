import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "enabled": z.boolean().describe("Whether GitHub Actions is enabled on the repository."),
  "allowed_actions": z.enum(["all","local_only","selected"]).describe("The permissions policy that controls the actions and reusable workflows that are allowed to run.").optional()
}