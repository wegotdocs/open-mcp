import { z } from "zod"

export const toolName = `acceptregistration`
export const toolDescription = `Accept registration`
export const baseUrl = `https://peertube2.cpy.re`
export const path = `/api/v1/users/registrations/{registrationId}/accept`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "path": z.object({ "registrationId": z.number().int().gte(1).describe("Registration ID") }).optional(), "body": z.object({ "moderationResponse": z.string().describe("Moderation response to send to the user"), "preventEmailDelivery": z.boolean().describe("Set it to true if you don't want PeerTube to send an email to the user").optional() }).optional() }).shape