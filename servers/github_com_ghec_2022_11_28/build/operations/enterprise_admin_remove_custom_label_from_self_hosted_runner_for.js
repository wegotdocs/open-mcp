import { z } from "zod";
export const toolName = `enterprise_admin_remove_custom_label_from_self_hosted_runner_for`;
export const toolDescription = `Remove a custom label from a self-hosted runner for an enterprise`;
export const baseUrl = `https://github.com`;
export const path = `/enterprises/{enterprise}/actions/runners/{runner_id}/labels/{name}`;
export const method = `delete`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "enterprise": z.string().describe("The slug version of the enterprise name. You can also substitute this value with the enterprise id."), "runner_id": z.number().int().describe("Unique identifier of the self-hosted runner."), "name": z.string().describe("The name of a self-hosted runner's custom label.") }).optional() }).shape;
