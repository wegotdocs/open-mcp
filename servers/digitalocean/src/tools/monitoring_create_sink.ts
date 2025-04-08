import { z } from "zod"

export const toolName = `monitoring_create_sink`
export const toolDescription = `Create Sink`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/monitoring/sinks`
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
  "path": [],
  "cookie": [],
  "body": [
    "destination_uuid",
    "resources"
  ]
}
export const flatMap = {}

export const inputParams = {
  "destination_uuid": z.string().describe("A unique identifier for an already-existing destination.").optional(),
  "resources": z.array(z.object({ "urn": z.string().regex(new RegExp("^do:kubernetes:.*")).describe("The uniform resource name (URN) for the resource in the format do:resource_type:resource_id."), "name": z.string().describe("resource name").optional() })).describe("List of resources identified by their URNs.").optional()
}