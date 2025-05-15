import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_worker",
  "toolDescription": "Worker object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/Worker",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool