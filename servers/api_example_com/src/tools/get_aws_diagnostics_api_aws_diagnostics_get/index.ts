import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_aws_diagnostics_api_aws_diagnostics_get",
  "toolDescription": "Get Aws Diagnostics",
  "baseUrl": "https://api.example.com",
  "path": "/api/aws/diagnostics",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool