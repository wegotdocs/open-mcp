import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "check_iam_role_exists_api_aws_iam_roles_role_name_exists_get",
  "toolDescription": "Check Iam Role Exists",
  "baseUrl": "https://api.example.com",
  "path": "/api/aws/iam/roles/{role_name}/exists",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "role_name": "role_name"
    }
  },
  inputParamsSchema
}

export default tool