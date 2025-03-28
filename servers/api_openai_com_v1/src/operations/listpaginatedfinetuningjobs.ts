import { z } from "zod"

export const toolName = `listpaginatedfinetuningjobs`
export const toolDescription = `List your organization's fine-tuning jobs`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/fine_tuning/jobs`
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

export const inputParams = z.object({ "query": z.object({ "after": z.string().describe("Identifier for the last job from the previous pagination request.").optional(), "limit": z.number().int().describe("Number of fine-tuning jobs to retrieve."), "metadata": z.record(z.string()).nullable().describe("Optional metadata filter. To filter, use the syntax `metadata[k]=v`. Alternatively, set `metadata=null` to indicate no metadata.\n").optional() }).optional() }).shape