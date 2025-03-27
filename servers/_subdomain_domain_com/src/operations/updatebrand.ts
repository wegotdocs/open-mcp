import { z } from "zod"

export const toolName = `updatebrand`
export const toolDescription = `Update a Brand`
export const baseUrl = `https://{subdomain}.{domain}.com`
export const path = `/api/v2/brands/{brand_id}`
export const method = `put`
export const security = [
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  }
]

export const inputParams = z.object({ "path": z.object({ "brand_id": z.number().int().describe("The ID of the brand") }).optional(), "body": z.object({ "brand": z.object({ "active": z.boolean().describe("If the brand is set as active").optional(), "brand_url": z.string().describe("The url of the brand").optional(), "created_at": z.string().datetime({ offset: true }).describe("The time the brand was created").readonly().optional(), "default": z.boolean().describe("Is the brand the default brand for this account").optional(), "has_help_center": z.boolean().describe("If the brand has a Help Center").optional(), "help_center_state": z.enum(["enabled","disabled","restricted"]).describe("The state of the Help Center").readonly().optional(), "host_mapping": z.string().describe("The hostmapping to this brand, if any. Only admins view this property.").optional(), "id": z.number().int().describe("The ID automatically assigned when the brand is created").readonly().optional(), "is_deleted": z.boolean().describe("If the brand object is deleted or not").optional(), "logo": z.string().optional(), "name": z.string().describe("The name of the brand"), "signature_template": z.string().describe("The signature template for a brand").optional(), "subdomain": z.string().describe("The subdomain of the brand"), "ticket_form_ids": z.array(z.number().int()).describe("The ids of ticket forms that are available for use by a brand").readonly().optional(), "updated_at": z.string().datetime({ offset: true }).describe("The time of the last update of the brand").readonly().optional(), "url": z.string().describe("The API url of this brand").readonly().optional() }).optional() }).optional() }).shape