import { z } from "zod"

export const toolName = `createwebhook`
export const toolDescription = `Creates a webhook`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/webhooks`
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
  "query": [
    "teamId",
    "slug"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "url",
    "events",
    "projectIds"
  ]
}
export const flatMap = {}

export const inputParams = {
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "url": z.string().url().regex(new RegExp("^https?://")),
  "events": z.array(z.enum(["budget.reached","budget.reset","domain.created","deployment.created","deployment.error","deployment.canceled","deployment.succeeded","deployment.ready","deployment.check-rerequested","deployment.promoted","deployment.integration.action.start","deployment.integration.action.cancel","deployment.integration.action.cleanup","edge-config.created","edge-config.deleted","edge-config.items.updated","firewall.attack","integration-configuration.permission-upgraded","integration-configuration.removed","integration-configuration.scope-change-confirmed","integration-resource.project-connected","integration-resource.project-disconnected","project.created","project.removed","deployment-checks-completed","deployment-ready","deployment-prepared","deployment-error","deployment-check-rerequested","deployment-canceled","project-created","project-removed","domain-created","deployment","integration-configuration-permission-updated","integration-configuration-removed","integration-configuration-scope-change-confirmed","marketplace.invoice.created","marketplace.invoice.paid","marketplace.invoice.notpaid","marketplace.invoice.refunded","observability.anomaly","test-webhook"])).min(1),
  "projectIds": z.array(z.string().regex(new RegExp("^[a-zA-z0-9_]+$"))).min(1).max(50).optional()
}