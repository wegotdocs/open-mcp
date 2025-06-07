import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "debug_aws_billing_api_aws_billing_debug_get",
  "toolDescription": "Debug Aws Billing",
  "baseUrl": "https://api.example.com",
  "path": "/api/aws/billing/debug",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool