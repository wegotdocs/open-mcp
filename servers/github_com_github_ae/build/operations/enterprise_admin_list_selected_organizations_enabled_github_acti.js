import { z } from "zod";
export const toolName = `enterprise_admin_list_selected_organizations_enabled_github_acti`;
export const toolDescription = `List selected organizations enabled for GitHub Actions in an enterprise`;
export const baseUrl = `https://github.com`;
export const path = `/enterprises/{enterprise}/actions/permissions/organizations`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "enterprise": z.string().describe("The slug version of the enterprise name. You can also substitute this value with the enterprise id.") }).optional(), "query": z.object({ "per_page": z.number().int().describe("The number of results per page (max 100)."), "page": z.number().int().describe("Page number of the results to fetch.") }).optional() }).shape;
