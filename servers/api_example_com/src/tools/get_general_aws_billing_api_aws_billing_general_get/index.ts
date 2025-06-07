import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_general_aws_billing_api_aws_billing_general_get",
  "toolDescription": "Get General Aws Billing",
  "baseUrl": "https://api.example.com",
  "path": "/api/aws/billing/general",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool