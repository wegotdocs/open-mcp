import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_iam_roles_api_aws_iam_roles_get",
  "toolDescription": "List Iam Roles",
  "baseUrl": "https://api.example.com",
  "path": "/api/aws/iam/roles",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "path_prefix": "path_prefix",
      "max_items": "max_items"
    }
  },
  inputParamsSchema
}

export default tool