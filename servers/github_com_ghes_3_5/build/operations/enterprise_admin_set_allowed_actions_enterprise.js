import { z } from "zod";
export const toolName = `enterprise_admin_set_allowed_actions_enterprise`;
export const toolDescription = `Set allowed actions for an enterprise`;
export const baseUrl = `https://github.com`;
export const path = `/enterprises/{enterprise}/actions/permissions/selected-actions`;
export const method = `put`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "enterprise": z.string().describe("The slug version of the enterprise name. You can also substitute this value with the enterprise id.") }).optional(), "body": z.object({ "github_owned_allowed": z.boolean().describe("Whether GitHub-owned actions are allowed. For example, this includes the actions in the `actions` organization."), "patterns_allowed": z.array(z.string()).describe("Specifies a list of string-matching patterns to allow specific action(s). Wildcards, tags, and SHAs are allowed. For example, `monalisa/octocat@*`, `monalisa/octocat@v2`, `monalisa/*`.") }).optional() }).shape;
