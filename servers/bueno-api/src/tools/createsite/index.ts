import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createsite",
  "toolDescription": "Create Site",
  "baseUrl": "https://api.example.com",
  "path": "/v2/sites",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "name": "name",
      "area": "area",
      "latitude": "latitude",
      "longitude": "longitude",
      "address": "address",
      "city": "city",
      "state": "state",
      "country": "country",
      "postcode": "postcode",
      "timezone": "timezone",
      "props": "props",
      "tags": "tags",
      "refs": "refs"
    }
  },
  inputParamsSchema
}

export default tool