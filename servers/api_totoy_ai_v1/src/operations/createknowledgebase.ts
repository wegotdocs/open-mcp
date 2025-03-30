import { z } from "zod"

export const toolName = `createknowledgebase`
export const toolDescription = `Creates a Knowledge Base.`
export const baseUrl = `https://api.totoy.ai/v1`
export const path = `/knowledge-bases`
export const method = `post`
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

export const inputParams = z.object({ "body": z.object({ "name": z.string().max(256).describe("The name for the `Knowledge Base`").optional(), "instructions": z.string().max(4096).describe("The instructions for the `Knowledge Base`.").optional(), "project_id": z.string().regex(new RegExp("^pj_[a-zA-Z0-9]{25}$")).max(28).describe("The unique identifier for the `Project` that the `Knowledge Base` will be assigned to. If no `project_id` is provided, the `Knowledge Base` will be assigned to the default `Project`.").optional() }).strict().optional() }).shape