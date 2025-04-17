import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retrieveprops",
  "toolDescription": "Retrieve Props",
  "baseUrl": "https://api.example.com",
  "path": "/v2/props",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "nodeType": "nodeType",
      "propType": "propType",
      "unitTypeId": "unitTypeId",
      "classId": "classId"
    }
  },
  inputParamsSchema
}

export default tool