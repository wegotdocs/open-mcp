import { z } from "zod"

export const toolName = `oidc_update_oidc_custom_sub_template_for_org`
export const toolDescription = `Set the customization template for an OIDC subject claim for an organization`
export const baseUrl = `https://github.com`
export const path = `/orgs/{org}/actions/oidc/customization/sub`
export const method = `put`
export const security = []

export const inputParams = z.object({ "path": z.object({ "org": z.string().describe("The organization name. The name is not case sensitive.") }).optional(), "body": z.object({ "include_claim_keys": z.array(z.string()).describe("Array of unique strings. Each claim key can only contain alphanumeric characters and underscores.") }).describe("Actions OIDC Subject customization").optional() }).shape