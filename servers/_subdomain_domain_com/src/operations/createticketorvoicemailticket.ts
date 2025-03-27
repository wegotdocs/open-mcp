import { z } from "zod"

export const toolName = `createticketorvoicemailticket`
export const toolDescription = `Create Ticket or Voicemail Ticket`
export const baseUrl = `https://{subdomain}.{domain}.com`
export const path = `/api/v2/channels/voice/tickets`
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

export const inputParams = z.object({ "path": z.object({ "agent_id": z.number().int().describe("ID of an agent"), "ticket_id": z.number().int().describe("The ID of the ticket") }).optional(), "body": z.object({ "display_to_agent": z.number().int().describe("Optional value such as the ID of the agent that will see the newly created ticket.").optional(), "ticket": z.string().optional() }).optional() }).shape