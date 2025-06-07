import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_vanta_test_results_api_vanta_test_results_get",
  "toolDescription": "Get Vanta Test Results",
  "baseUrl": "https://api.example.com",
  "path": "/api/vanta/test-results",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool