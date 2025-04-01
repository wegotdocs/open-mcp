import { z } from "zod"

export const toolName = `getsourcesbytarget`
export const toolDescription = `Get sources by target`
export const baseUrl = `https://{subdomain}.{domain}.com`
export const path = `/api/v2/{target_type}/{target_id}/relationship_fields/{field_id}/{source_type}`
export const method = `get`
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

export const inputParams = z.object({ "path": z.object({ "target_type": z.string().describe("The type of object the relationship field is targeting.\nThe options are \"zen:user\", \"zen:ticket\", \"zen:organization\", and \"zen:custom_object:CUSTOM_OBJECT_KEY\"\n"), "target_id": z.number().int().describe("The id of the object the relationship field is targeting\n"), "field_id": z.number().int().describe("The id of the lookup relationship field\n"), "source_type": z.string().describe("The type of object the relationship field belongs to (example. ticket field belongs to a ticket object).\nThe options are \"zen:user\", \"zen:ticket\", \"zen:organization\", and \"zen:custom_object:CUSTOM_OBJECT_KEY\"\n") }).optional() }).shape