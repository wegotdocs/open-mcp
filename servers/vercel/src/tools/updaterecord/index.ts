import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updaterecord",
  "toolDescription": "Update an existing DNS record",
  "baseUrl": "https://api.vercel.com",
  "path": "/v1/domains/records/{recordId}",
  "method": "patch",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "recordId": "recordId"
    },
    "query": {
      "teamId": "teamId",
      "slug": "slug"
    },
    "body": {
      "additionalProperties": "additionalProperties",
      "name": "name",
      "value": "value",
      "type": "type",
      "ttl": "ttl",
      "mxPriority": "mxPriority",
      "srv": "srv",
      "https": "https",
      "comment": "comment"
    }
  },
  inputParamsSchema
}

export default tool