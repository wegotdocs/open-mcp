import { z } from "zod"

export const toolName = `retrieve_a_card_profile`
export const toolDescription = `Retrieve a Card Profile`
export const baseUrl = `https://api.increase.com`
export const path = `/card_profiles/{card_profile_id}`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]

export const inputParams = z.object({ "path": z.object({ "card_profile_id": z.string().describe("The identifier of the Card Profile.") }).optional() }).shape