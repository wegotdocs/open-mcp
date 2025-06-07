import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "check_required_iam_roles_api_aws_iam_roles_get",
  "toolDescription": "Check Required Iam Roles",
  "baseUrl": "https://api.example.com",
  "path": "/api/aws/iam-roles",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "required_roles": "required_roles"
    }
  },
  inputParamsSchema
}

export default tool