import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createupdatepeople",
  "toolDescription": "Create/Update People",
  "baseUrl": "https://api.encharge.io/v1",
  "path": "/people",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool