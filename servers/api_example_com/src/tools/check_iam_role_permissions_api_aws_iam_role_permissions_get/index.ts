import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "check_iam_role_permissions_api_aws_iam_role_permissions_get",
  "toolDescription": "Check Iam Role Permissions",
  "baseUrl": "https://api.example.com",
  "path": "/api/aws/iam-role-permissions",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool