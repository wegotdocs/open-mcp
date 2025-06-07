import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "test_aws_connection_api_settings_test_aws_post",
  "toolDescription": "Test Aws Connection",
  "baseUrl": "https://api.example.com",
  "path": "/api/settings/test/aws",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool