import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_webextensionconfig",
  "toolDescription": "Retrieve a webextension configuration given its identifier.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/webextensionconfigs/{id}",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool