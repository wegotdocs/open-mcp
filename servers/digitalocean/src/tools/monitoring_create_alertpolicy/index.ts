import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "monitoring_create_alertpolicy",
  "toolDescription": "Create Alert Policy",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/monitoring/alerts",
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
      "alerts": "alerts",
      "compare": "compare",
      "description": "description",
      "enabled": "enabled",
      "entities": "entities",
      "tags": "tags",
      "type": "type",
      "value": "value",
      "window": "window"
    }
  },
  inputParamsSchema
}

export default tool