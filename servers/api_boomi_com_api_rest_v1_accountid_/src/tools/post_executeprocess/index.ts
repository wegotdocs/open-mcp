import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_executeprocess",
  "toolDescription": "Execute process operation",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/ExecuteProcess",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool