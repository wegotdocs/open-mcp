import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "authenticationcontrollerrevokesession",
  "toolDescription": "User logout",
  "baseUrl": "https://api.example.com",
  "path": "/api/auth/logout",
  "method": "delete",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool