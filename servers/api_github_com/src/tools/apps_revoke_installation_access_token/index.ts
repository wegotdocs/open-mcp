import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "apps_revoke_installation_access_token",
  "toolDescription": "Revoke an installation access token",
  "baseUrl": "https://api.github.com",
  "path": "/installation/token",
  "method": "delete",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool