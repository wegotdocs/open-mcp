import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "test_linear_connection_api_settings_test_linear_post",
  "toolDescription": "Test Linear Connection",
  "baseUrl": "https://api.example.com",
  "path": "/api/settings/test/linear",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool