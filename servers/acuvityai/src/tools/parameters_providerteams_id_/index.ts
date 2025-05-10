import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "parameters_providerteams_id_",
  "toolDescription": "",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/providerteams/{id}",
  "method": "parameters",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool