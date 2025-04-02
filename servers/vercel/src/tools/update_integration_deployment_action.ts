import { z } from "zod"

export const toolName = `update_integration_deployment_action`
export const toolDescription = `Update deployment integration action`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/deployments/{deploymentId}/integrations/{integrationConfigurationId}/resources/{resourceId}/actions/{action}`
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
    "deploymentId",
    "integrationConfigurationId",
    "resourceId",
    "action"
  ],
  "cookie": [],
  "body": [
    "status",
    "statusText",
    "outcomes"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "deploymentId": z.string(), "integrationConfigurationId": z.string(), "resourceId": z.string(), "action": z.string(), "status": z.enum(["running","succeeded","failed"]).optional(), "statusText": z.string().optional(), "outcomes": z.array(z.object({ "kind": z.literal("resource-secrets"), "secrets": z.array(z.object({ "name": z.string(), "value": z.string() }).strict()) }).strict()).optional() }).shape