import { z } from "zod";
export const toolName = `enterprise_admin_add_custom_labels_to_self_hosted_runner_for_ent`;
export const toolDescription = `Add custom labels to a self-hosted runner for an enterprise`;
export const baseUrl = `https://github.com`;
export const path = `/enterprises/{enterprise}/actions/runners/{runner_id}/labels`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "enterprise": z.string().describe("The slug version of the enterprise name. You can also substitute this value with the enterprise id."), "runner_id": z.number().int().describe("Unique identifier of the self-hosted runner.") }).optional(), "body": z.object({ "labels": z.array(z.string()).min(1).max(100).describe("The names of the custom labels to add to the runner.") }).optional() }).shape;
