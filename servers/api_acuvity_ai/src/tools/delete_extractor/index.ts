import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_extractor",
  "toolDescription": "Delete an extractor given its identifier.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/extractors/{id}",
  "method": "delete",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool