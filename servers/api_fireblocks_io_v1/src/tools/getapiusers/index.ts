import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getapiusers",
  "toolDescription": "Get Api users",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/management/api_users",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool