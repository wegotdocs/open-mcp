import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "diagnose_azure_api_diagnostics_azure_get",
  "toolDescription": "Diagnose Azure",
  "baseUrl": "https://api.example.com",
  "path": "/api/diagnostics/azure",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool