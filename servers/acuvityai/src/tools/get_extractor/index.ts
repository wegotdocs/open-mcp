import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_extractor",
  "toolDescription": "Retrieve an extractor given its identifier.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/extractors/{id}",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool