import { z } from "zod"

export const toolName = `registry_get_options`
export const toolDescription = `List Registry Options (Subscription Tiers and Available Regions)`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/registry/options`
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
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {}