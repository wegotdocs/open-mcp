import { z } from "zod";
export const toolName = `enterprise_admin_list_runner_applications_for_enterprise`;
export const toolDescription = `List runner applications for an enterprise`;
export const baseUrl = `https://github.com`;
export const path = `/enterprises/{enterprise}/actions/runners/downloads`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "enterprise": z.string().describe("The slug version of the enterprise name. You can also substitute this value with the enterprise id.") }).optional() }).shape;
