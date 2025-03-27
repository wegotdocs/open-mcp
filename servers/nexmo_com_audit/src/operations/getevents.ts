import { z } from "zod"

export const toolName = `getevents`
export const toolDescription = `Retrieve audit events`
export const baseUrl = `https://api.nexmo.com/beta/audit`
export const path = `/events`
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

export const inputParams = z.object({ "query": z.object({ "event_type": z.enum(["USER_STATUS","USER_UPDATE","USER_BILLING_UPDATE","USER_CREATE","USER_LOGIN","USER_LOGOUT","USER_PRODUCT_SEARCH","USER_API_KEYS_UPDATE","ACCOUNT_SECRET_DELETE","ACCOUNT_SECRET_CREATE","ACCOUNT_UPDATE_SPAMMER","ACCOUNT_UPDATE_SETTINGS_API","NUMBER_ASSIGN","NUMBER_UPDATED","NUMBER_RELEASE","NUMBER_LINKED","NUMBER_UNLINKED","APP_CREATE","APP_UPDATE","APP_DELETE","APP_DISABLE","APP_ENABLE","IP_WHITELIST_CREATE","IP_WHITELIST_DELETE","AUTORELOAD_ENABLE","AUTORELOAD_UPDATE","AUTORELOAD_DISABLE"]).describe("The type of the audit event.").optional(), "date_from": z.string().describe("Start of time range for audit events. DateTime in ISO-8601 format.").optional(), "date_to": z.string().describe("End of time range for audit events. DateTime in ISO-8601 format.").optional(), "search_text": z.string().describe("Return only audit events where the JSON object contains this search text. Must be legal text for a JSON attribute value, that is quotes and braces must be escaped.").optional(), "page": z.string().describe("Page number starting with page 1.").optional(), "size": z.number().int().gte(1).lte(100).describe("Number of elements per page.") }).optional() }).shape