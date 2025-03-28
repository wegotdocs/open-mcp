import { z } from "zod"

export const toolName = `fetch_redemption_count_me_vip_get`
export const toolDescription = `Fetch Redemption Count`
export const baseUrl = `https://api.example.com`
export const path = `/me/vip`
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

export const inputParams = z.object({}).shape