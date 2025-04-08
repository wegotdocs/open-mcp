import { z } from "zod"

export const toolName = `listknowledgebases`
export const toolDescription = `Returns a list of Knowledge Bases.`
export const baseUrl = `https://api.totoy.ai/v1`
export const path = `/knowledge-bases`
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