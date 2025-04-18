import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "enabled_repositories": z.enum(["all","none","selected"]).describe("The policy that controls the repositories in the organization that are allowed to run GitHub Actions."),
  "allowed_actions": z.enum(["all","local_only","selected"]).describe("The permissions policy that controls the actions and reusable workflows that are allowed to run.").optional()
}