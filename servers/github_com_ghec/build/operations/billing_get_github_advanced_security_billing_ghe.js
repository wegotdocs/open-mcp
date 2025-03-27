import { z } from "zod";
export const toolName = `billing_get_github_advanced_security_billing_ghe`;
export const toolDescription = `Get GitHub Advanced Security active committers for an enterprise`;
export const baseUrl = `https://github.com`;
export const path = `/enterprises/{enterprise}/settings/billing/advanced-security`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "enterprise": z.string().describe("The slug version of the enterprise name. You can also substitute this value with the enterprise id.") }).optional(), "query": z.object({ "per_page": z.number().int().describe("The number of results per page (max 100)."), "page": z.number().int().describe("Page number of the results to fetch.") }).optional() }).shape;
