import { z } from "zod"

export const toolName = `listmodels`
export const toolDescription = `/api/v1/models`
export const baseUrl = `https://api.venice.ai/api/v1`
export const path = `/models`
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
export const keys = {
  "query": [
    "type"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "type": z.union([z.enum(["image","text","embedding","tts"]), z.enum(["all","code"])]).describe("Filter models by type. Use \"all\" to get all model types.").optional() }).shape