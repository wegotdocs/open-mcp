import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "test_coda_integration_api_ai_test_coda_get",
  "toolDescription": "Test Coda Integration",
  "baseUrl": "https://api.example.com",
  "path": "/api/ai/test-coda",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool