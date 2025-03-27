import { z } from "zod";
export const toolName = `enterprise_admin_set_github_actions_permissions_enterprise`;
export const toolDescription = `Set GitHub Actions permissions for an enterprise`;
export const baseUrl = `https://github.com`;
export const path = `/enterprises/{enterprise}/actions/permissions`;
export const method = `put`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "enterprise": z.string().describe("The slug version of the enterprise name. You can also substitute this value with the enterprise id.") }).optional(), "body": z.object({ "allowed_actions": z.enum(["all", "local_only", "selected"]).describe("The permissions policy that controls the actions and reusable workflows that are allowed to run.").optional(), "enabled_organizations": z.enum(["all", "none", "selected"]).describe("The policy that controls the organizations in the enterprise that are allowed to run GitHub Actions.") }).optional() }).shape;
