import { z } from "zod";
export const toolName = `enterprise_admin_remove_org_access_to_self_hosted_runner_group_i`;
export const toolDescription = `Remove organization access to a self-hosted runner group in an enterprise`;
export const baseUrl = `https://github.com`;
export const path = `/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations/{org_id}`;
export const method = `delete`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "enterprise": z.string().describe("The slug version of the enterprise name. You can also substitute this value with the enterprise id."), "runner_group_id": z.number().int().describe("Unique identifier of the self-hosted runner group."), "org_id": z.number().int().describe("The unique identifier of the organization.") }).optional() }).shape;
