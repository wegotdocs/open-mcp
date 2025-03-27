import { z } from "zod";
export const toolName = `actions_set_github_actions_default_workflow_permissions_enterpri`;
export const toolDescription = `Set default workflow permissions for an enterprise`;
export const baseUrl = `https://github.com`;
export const path = `/enterprises/{enterprise}/actions/permissions/workflow`;
export const method = `put`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "enterprise": z.string().describe("The slug version of the enterprise name. You can also substitute this value with the enterprise id.") }).optional(), "body": z.object({ "can_approve_pull_request_reviews": z.boolean().describe("Whether GitHub Actions can approve pull requests. Enabling this can be a security risk.").optional(), "default_workflow_permissions": z.enum(["read", "write"]).describe("The default workflow permissions granted to the GITHUB_TOKEN when running workflows.").optional() }).optional() }).shape;
