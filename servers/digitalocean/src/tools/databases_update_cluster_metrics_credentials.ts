import { z } from "zod"

export const toolName = `databases_update_cluster_metrics_credentials`
export const toolDescription = `Update Database Clusters' Metrics Endpoint Credentials`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/databases/metrics/credentials`
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
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {}