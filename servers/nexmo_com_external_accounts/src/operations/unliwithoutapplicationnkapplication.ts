import { z } from "zod"

export const toolName = `unliwithoutapplicationnkapplication`
export const toolDescription = `Unlink application from an account`
export const baseUrl = `https://api.nexmo.com/beta/chatapp-accounts`
export const path = `/{provider}/{external_id}/applications/{application_id}`
export const method = `delete`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  },
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  }
]

export const inputParams = z.object({ "path": z.object({ "provider": z.enum(["messenger","viber_service_msg","whatsapp"]).describe("Provider of the account you want to unlink an application from"), "external_id": z.string().describe("External id of the account you want to unlink an application from"), "application_id": z.string().describe("Id of the application you want to unlink") }).optional() }).shape