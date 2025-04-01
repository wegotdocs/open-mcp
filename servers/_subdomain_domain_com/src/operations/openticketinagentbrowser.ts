import { z } from "zod"

export const toolName = `openticketinagentbrowser`
export const toolDescription = `Open Ticket in Agent's Browser`
export const baseUrl = `https://{subdomain}.{domain}.com`
export const path = `/api/v2/channels/voice/agents/{agent_id}/tickets/{ticket_id}/display`
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

export const inputParams = z.object({ "path": z.object({ "agent_id": z.number().int().describe("ID of an agent"), "ticket_id": z.number().int().describe("The ID of the ticket") }).optional() }).shape