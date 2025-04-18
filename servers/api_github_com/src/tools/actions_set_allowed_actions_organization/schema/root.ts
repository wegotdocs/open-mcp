import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "github_owned_allowed": z.boolean().describe("Whether GitHub-owned actions are allowed. For example, this includes the actions in the `actions` organization.").optional(),
  "verified_allowed": z.boolean().describe("Whether actions from GitHub Marketplace verified creators are allowed. Set to `true` to allow all actions by GitHub Marketplace verified creators.").optional(),
  "patterns_allowed": z.array(z.string()).describe("Specifies a list of string-matching patterns to allow specific action(s) and reusable workflow(s). Wildcards, tags, and SHAs are allowed. For example, `monalisa/octocat@*`, `monalisa/octocat@v2`, `monalisa/*`.\n\n> [!NOTE]\n> The `patterns_allowed` setting only applies to public repositories.").optional()
}