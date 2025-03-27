import { z } from "zod";
export const toolName = `actions_set_allowed_actions_organization`;
export const toolDescription = `Set allowed actions and reusable workflows for an organization`;
export const baseUrl = `https://api.github.com`;
export const path = `/orgs/{org}/actions/permissions/selected-actions`;
export const method = `put`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "org": z.string().describe("The organization name. The name is not case sensitive.") }).optional(), "body": z.object({ "github_owned_allowed": z.boolean().describe("Whether GitHub-owned actions are allowed. For example, this includes the actions in the `actions` organization.").optional(), "patterns_allowed": z.array(z.string()).describe("Specifies a list of string-matching patterns to allow specific action(s) and reusable workflow(s). Wildcards, tags, and SHAs are allowed. For example, `monalisa/octocat@*`, `monalisa/octocat@v2`, `monalisa/*`.\n\n**Note**: The `patterns_allowed` setting only applies to public repositories.").optional(), "verified_allowed": z.boolean().describe("Whether actions from GitHub Marketplace verified creators are allowed. Set to `true` to allow all actions by GitHub Marketplace verified creators.").optional() }).optional() }).shape;
