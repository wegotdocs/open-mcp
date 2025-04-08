import { z } from "zod"

export const toolName = `databases_update_firewall_rules`
export const toolDescription = `Update Firewall Rules (Trusted Sources) for a Database`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/databases/{database_cluster_uuid}/firewall`
export const method = `put`
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
    "database_cluster_uuid"
  ],
  "cookie": [],
  "body": [
    "rules"
  ]
}
export const flatMap = {}

export const inputParams = {
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
  "rules": z.array(z.object({ "uuid": z.string().regex(new RegExp("^$|[0-9a-f]{8}\\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\\b[0-9a-f]{12}")).describe("A unique ID for the firewall rule itself.").optional(), "cluster_uuid": z.string().regex(new RegExp("^$|[0-9a-f]{8}\\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\\b[0-9a-f]{12}")).describe("A unique ID for the database cluster to which the rule is applied.").readonly().optional(), "type": z.enum(["droplet","k8s","ip_addr","tag","app"]).describe("The type of resource that the firewall rule allows to access the database cluster."), "value": z.string().describe("The ID of the specific resource, the name of a tag applied to a group of resources, or the IP address that the firewall rule allows to access the database cluster."), "created_at": z.string().datetime({ offset: true }).describe("A time value given in ISO8601 combined date and time format that represents when the firewall rule was created.").readonly().optional() })).optional()
}