import { z } from "zod"

export const toolName = `sendbatchpost`
export const toolDescription = `Bulk SMS`
export const baseUrl = `https://rest-api.d7networks.com/secure`
export const path = `/sendbatch`
export const method = `post`
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

export const inputParams = z.object({ "header": z.object({ "Content-Type": z.string(), "Accept": z.string() }).optional(), "body": z.object({ "messages": z.array(z.object({ "content": z.string(), "from": z.string(), "to": z.array(z.string()).describe("Destination Number") })).describe("Sendbatch message body") }).describe("Bulk SMS Request").optional() }).shape