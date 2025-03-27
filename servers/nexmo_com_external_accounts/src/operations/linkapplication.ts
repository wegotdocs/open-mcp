import { z } from "zod"

export const toolName = `linkapplication`
export const toolDescription = `Link application to an account`
export const baseUrl = `https://api.nexmo.com/beta/chatapp-accounts`
export const path = `/{provider}/{external_id}/applications`
export const method = `post`
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

export const inputParams = z.object({ "path": z.object({ "provider": z.enum(["messenger","viber_service_msg","whatsapp"]).describe("Provider of the account you want to assign an application to"), "external_id": z.string().describe("External id of the account you want to assign an application to. This is channel dependent. For Facebook it will be your Facebook Page ID, for Viber your Viber Service Message ID and for WhatsApp your WhatsApp number.") }).optional(), "body": z.object({ "application": z.string().describe("There is just one application allowed per an account. The application type must be type \"messages\". For more information please see [Application API Spec](https://developer.nexmo.com/api/application.v2)") }).optional() }).shape