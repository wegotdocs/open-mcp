import { z } from "zod";
export const toolName = `enterprise_admin_set_selected_organizations_enabled_github_actio`;
export const toolDescription = `Set selected organizations enabled for GitHub Actions in an enterprise`;
export const baseUrl = `https://github.com`;
export const path = `/enterprises/{enterprise}/actions/permissions/organizations`;
export const method = `put`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "enterprise": z.string().describe("The slug version of the enterprise name. You can also substitute this value with the enterprise id.") }).optional(), "body": z.object({ "selected_organization_ids": z.array(z.number().int().describe("Unique identifier of the organization.")).describe("List of organization IDs to enable for GitHub Actions.") }).optional() }).shape;
