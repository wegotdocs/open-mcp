import { z } from "zod"

export const toolName = `databases_update_kafka_topic`
export const toolDescription = `Update Topic for a Kafka Cluster`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/databases/{database_cluster_uuid}/topics/{topic_name}`
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
    "database_cluster_uuid",
    "topic_name"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
  "topic_name": z.string().describe("The name used to identify the Kafka topic.")
}