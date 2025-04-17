import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retrievepointclasses",
  "toolDescription": "Retrieve Point Classes",
  "baseUrl": "https://api.example.com",
  "path": "/v2/point-classes",
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
      "equipClassId": "equipClassId",
      "unitTypeId": "unitTypeId",
      "pointType": "pointType"
    }
  },
  inputParamsSchema
}

export default tool