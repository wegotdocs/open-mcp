import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getpeopleinsegment",
  "toolDescription": "Get people in Segment.",
  "baseUrl": "https://api.encharge.io/v1",
  "path": "/segments/{segmentId}/people",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "segmentId": "segmentId"
    },
    "query": {
      "limit": "limit",
      "offset": "offset",
      "attributes": "attributes",
      "sort": "sort",
      "order": "order"
    }
  },
  inputParamsSchema
}

export default tool