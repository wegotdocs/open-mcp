import { z } from "zod"

export const toolName = `patch_v1_installations_integrationconfigurationid_resources_reso`
export const toolDescription = `Patch an existing experimentation item`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/installations/{integrationConfigurationId}/resources/{resourceId}/experimentation/items/{itemId}`
export const method = `patch`
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
    "resourceId",
    "itemId"
  ],
  "cookie": [],
  "body": [
    "slug",
    "origin",
    "name",
    "category",
    "description",
    "isArchived",
    "createdAt",
    "updatedAt"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "integrationConfigurationId": z.string(), "resourceId": z.string(), "itemId": z.string(), "slug": z.string().max(1024), "origin": z.string().max(2048), "name": z.string().max(1024).optional(), "category": z.enum(["experiment","flag"]).optional(), "description": z.string().max(1024).optional(), "isArchived": z.boolean().optional(), "createdAt": z.number().optional(), "updatedAt": z.number().optional() }).shape