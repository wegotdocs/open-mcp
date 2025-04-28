import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "environment_variable_doc_api_v3_doc_environment_variable_get",
  "toolDescription": "環境變數",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/doc/environment_variable",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool