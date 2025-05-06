import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createentityattribute",
  "toolDescription": "Create a new attribute for an entity",
  "baseUrl": "https://api.kanka.io/1.0",
  "path": "/campaigns/{campaignId}/entities/{entityId}/attributes",
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
      "value": "value",
      "is_private": "is_private",
      "is_star": "is_star",
      "default_order": "default_order"
    }
  },
  inputParamsSchema
}

export default tool