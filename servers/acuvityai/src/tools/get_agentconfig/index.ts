import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_agentconfig",
  "toolDescription": "Retrieve an agent configuration given its identifier.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/agentconfigs/{id}",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool