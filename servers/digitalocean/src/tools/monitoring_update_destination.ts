import { z } from "zod"

export const toolName = `monitoring_update_destination`
export const toolDescription = `Update Logging Destination`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/monitoring/sinks/destinations/{destination_uuid}`
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
    "destination_uuid"
  ],
  "cookie": [],
  "body": [
    "name",
    "type",
    "config"
  ]
}
export const flatMap = {}

export const inputParams = {
  "destination_uuid": z.string().describe("A unique identifier for a destination."),
  "name": z.string().describe("destination name").optional(),
  "type": z.enum(["opensearch_dbaas","opensearch_ext"]).describe("The destination type. `opensearch_dbaas` for a DigitalOcean managed OpenSearch\ncluster or `opensearch_ext` for an externally managed one.\n"),
  "config": z.object({ "credentials": z.object({ "username": z.string().optional(), "password": z.string().optional() }).describe("Credentials for an OpenSearch cluster user. Optional if `cluster_uuid` is passed.").optional(), "endpoint": z.string().describe("host of the OpenSearch cluster"), "cluster_uuid": z.string().describe("A unique identifier for a managed OpenSearch cluster.").optional(), "cluster_name": z.string().describe("Name of a managed OpenSearch cluster.").optional(), "index_name": z.string().describe("OpenSearch index to send logs to.").optional(), "retention_days": z.number().int().describe("Number of days to retain logs in an OpenSearch cluster.") })
}