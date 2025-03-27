import { z } from "zod";
export const toolName = `secret_scanning_get_security_analysis_settings_for_enterprise`;
export const toolDescription = `Get code security and analysis features for an enterprise`;
export const baseUrl = `https://github.com`;
export const path = `/enterprises/{enterprise}/code_security_and_analysis`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "enterprise": z.string().describe("The slug version of the enterprise name. You can also substitute this value with the enterprise id.") }).optional() }).shape;
