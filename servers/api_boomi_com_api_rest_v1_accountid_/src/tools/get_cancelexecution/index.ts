import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_cancelexecution",
  "toolDescription": "Cancel execution operation",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/CancelExecution",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool