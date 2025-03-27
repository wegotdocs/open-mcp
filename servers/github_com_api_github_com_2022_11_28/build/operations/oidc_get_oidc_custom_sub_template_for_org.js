import { z } from "zod";
export const toolName = `oidc_get_oidc_custom_sub_template_for_org`;
export const toolDescription = `Get the customization template for an OIDC subject claim for an organization`;
export const baseUrl = `https://github.com`;
export const path = `/orgs/{org}/actions/oidc/customization/sub`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "org": z.string().describe("The organization name. The name is not case sensitive.") }).optional() }).shape;
