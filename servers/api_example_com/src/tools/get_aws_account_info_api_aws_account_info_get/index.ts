import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_aws_account_info_api_aws_account_info_get",
  "toolDescription": "Get Aws Account Info",
  "baseUrl": "https://api.example.com",
  "path": "/api/aws/account-info",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool