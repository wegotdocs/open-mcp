import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "test_connection_api_v1_predictions_test_connection_get",
  "toolDescription": "Test Connection",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/predictions/test_connection",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool