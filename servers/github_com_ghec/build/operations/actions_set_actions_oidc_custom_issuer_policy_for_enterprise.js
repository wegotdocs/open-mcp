import { z } from "zod";
export const toolName = `actions_set_actions_oidc_custom_issuer_policy_for_enterprise`;
export const toolDescription = `Set the GitHub Actions OIDC custom issuer policy for an enterprise`;
export const baseUrl = `https://github.com`;
export const path = `/enterprises/{enterprise}/actions/oidc/customization/issuer`;
export const method = `put`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "enterprise": z.string().describe("The slug version of the enterprise name. You can also substitute this value with the enterprise id.") }).optional(), "body": z.object({ "include_enterprise_slug": z.boolean().describe("Whether the enterprise customer requested a custom issuer URL.").optional() }).optional() }).shape;
