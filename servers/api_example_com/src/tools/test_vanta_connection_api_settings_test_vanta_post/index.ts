import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "test_vanta_connection_api_settings_test_vanta_post",
  "toolDescription": "Test Vanta Connection",
  "baseUrl": "https://api.example.com",
  "path": "/api/settings/test/vanta",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool