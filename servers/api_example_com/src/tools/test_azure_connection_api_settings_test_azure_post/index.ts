import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "test_azure_connection_api_settings_test_azure_post",
  "toolDescription": "Test Azure Connection",
  "baseUrl": "https://api.example.com",
  "path": "/api/settings/test/azure",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool