import { z } from "zod"

export const toolName = `post_v1_installations_integrationconfigurationid_resources_resou`
export const toolDescription = `Create one or multiple experimentation items`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/installations/{integrationConfigurationId}/resources/{resourceId}/experimentation/items`
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
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "integrationConfigurationId",
    "resourceId"
  ],
  "cookie": [],
  "body": [
    "items"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "integrationConfigurationId": z.string(), "resourceId": z.string(), "items": z.array(z.object({ "id": z.string().max(1024), "slug": z.string().max(1024), "origin": z.string().max(2048), "category": z.enum(["experiment","flag"]).optional(), "name": z.string().max(1024).optional(), "description": z.string().max(1024).optional(), "isArchived": z.boolean().optional(), "createdAt": z.number().optional(), "updatedAt": z.number().optional() }).strict()).max(50) }).shape