import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_admin_realms_realm_components",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/components",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "id": "id",
      "name": "name",
      "providerId": "providerId",
      "providerType": "providerType",
      "parentId": "parentId",
      "subType": "subType",
      "config": "config"
    }
  },
  inputParamsSchema
}

export default tool