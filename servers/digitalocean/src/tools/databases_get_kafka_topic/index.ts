export { inputParams } from "./schema/root.js"

export const toolName = `databases_get_kafka_topic`
export const toolDescription = `Get Topic for a Kafka Cluster`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/databases/{database_cluster_uuid}/topics/{topic_name}`
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