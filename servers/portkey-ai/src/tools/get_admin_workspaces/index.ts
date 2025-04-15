import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_workspaces",
  "toolDescription": "Get All Workspaces",
  "baseUrl": "https://api.portkey.ai/v1",
  "path": "/admin/workspaces",
  "method": "get",
  "security": [
    {
      "key": "x-portkey-api-key",
      "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_PORTKEY_API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "page_size": "page_size",
      "current_page": "current_page"
    }
  },
  inputParamsSchema
}

export default tool