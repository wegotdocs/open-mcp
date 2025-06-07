import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "validate_ai_key_api_ai_validate_key_post",
  "toolDescription": "Validate Ai Key",
  "baseUrl": "https://api.example.com",
  "path": "/api/ai/validate-key",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool