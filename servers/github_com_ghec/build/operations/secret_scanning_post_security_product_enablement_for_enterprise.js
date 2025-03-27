import { z } from "zod";
export const toolName = `secret_scanning_post_security_product_enablement_for_enterprise`;
export const toolDescription = `Enable or disable a security feature`;
export const baseUrl = `https://github.com`;
export const path = `/enterprises/{enterprise}/{security_product}/{enablement}`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "enterprise": z.string().describe("The slug version of the enterprise name. You can also substitute this value with the enterprise id."), "security_product": z.enum(["advanced_security", "dependabot_alerts", "secret_scanning", "secret_scanning_push_protection"]).describe("The security feature to enable or disable."), "enablement": z.enum(["enable_all", "disable_all"]).describe("The action to take.\n\n`enable_all` means to enable the specified security feature for all repositories in the enterprise.\n`disable_all` means to disable the specified security feature for all repositories in the enterprise.") }).optional() }).shape;
