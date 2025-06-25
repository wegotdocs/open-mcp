import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createfulfillments",
  "toolDescription": "Create Fulfillment",
  "baseUrl": "https://{subdomain}.myclickfunnels.com/api/v2",
  "path": "/workspaces/{workspace_id}/fulfillments",
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
    "path": {
      "workspace_id": "workspace_id"
    },
    "body": {
      "fulfillment": "fulfillment"
    }
  },
  inputParamsSchema
}

export default tool