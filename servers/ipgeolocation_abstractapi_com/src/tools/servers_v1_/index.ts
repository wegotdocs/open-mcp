import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "servers_v1_",
  "toolDescription": "",
  "baseUrl": "https://ipgeolocation.abstractapi.com",
  "path": "/v1/",
  "method": "servers",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool