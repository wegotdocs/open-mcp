import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatefunnels",
  "toolDescription": "Update Funnel",
  "baseUrl": "https://{subdomain}.myclickfunnels.com/api/v2",
  "path": "/funnels/{id}",
  "method": "put",
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
      "id": "id"
    },
    "body": {
      "funnel": "funnel"
    }
  },
  inputParamsSchema
}

export default tool