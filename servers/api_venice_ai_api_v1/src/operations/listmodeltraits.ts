import { z } from "zod"

export const toolName = `listmodeltraits`
export const toolDescription = `/api/v1/models/traits`
export const baseUrl = `https://api.venice.ai/api/v1`
export const path = `/models/traits`
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

export const inputParams = z.object({ "query": z.object({ "type": z.enum(["image","text","embedding","tts"]).describe("Filter models by type.") }).optional() }).shape