import { z } from "zod"

export const toolName = `upsertcustomobjectrecordbyexternalidorname`
export const toolDescription = `Set Custom Object Record by External Id Or Name`
export const baseUrl = `https://{subdomain}.{domain}.com`
export const path = `/api/v2/custom_objects/{custom_object_key}/records`
export const method = `patch`
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

export const inputParams = z.object({ "path": z.object({ "custom_object_key": z.string().describe("The key of a custom object") }).optional(), "query": z.object({ "external_id": z.string().describe("The external id of a custom object record"), "name": z.string().describe("The name of a custom object record") }).optional(), "body": z.object({ "custom_object_record": z.object({ "created_at": z.string().datetime({ offset: true }).describe("The time the object was created").readonly().optional(), "created_by_user_id": z.string().describe("Id of a user who created the object").readonly().optional(), "custom_object_fields": z.record(z.any()).optional(), "custom_object_key": z.string().describe("A user-defined unique identifier").readonly().optional(), "external_id": z.string().nullable().describe("An id you can use to link custom object records to external data").optional(), "id": z.string().describe("Automatically assigned upon creation").readonly().optional(), "name": z.string().describe("User-defined display name for the object. If autonumbering is selected for the custom object's name field, the name isn't allowed because it's automatically generated. If uniqueness is enabled, the name must be unique.").readonly(), "updated_at": z.string().datetime({ offset: true }).describe("The time of the last update of the object").readonly().optional(), "updated_by_user_id": z.string().describe("Id of the last user who updated the object").readonly().optional(), "url": z.string().describe("Direct link to the specific custom object").readonly().optional() }).optional() }).optional() }).shape