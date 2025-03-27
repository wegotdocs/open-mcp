import { z } from "zod";
export const toolName = `enterprise_admin_set_org_access_to_self_hosted_runner_group_in_e`;
export const toolDescription = `Set organization access for a self-hosted runner group in an enterprise`;
export const baseUrl = `https://github.com`;
export const path = `/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations`;
export const method = `put`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "enterprise": z.string().describe("The slug version of the enterprise name. You can also substitute this value with the enterprise id."), "runner_group_id": z.number().int().describe("Unique identifier of the self-hosted runner group.") }).optional(), "body": z.object({ "selected_organization_ids": z.array(z.number().int().describe("Unique identifier of the organization.")).describe("List of organization IDs that can access the runner group.") }).optional() }).shape;
