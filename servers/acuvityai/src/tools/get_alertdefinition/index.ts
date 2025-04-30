import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_alertdefinition",
  "toolDescription": "Retrieves the alert definition with the given ID.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/alertdefinitions/{id}",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool