import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "codespaces_create_for_authenticated_user",
  "toolDescription": "Create a codespace for the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/user/codespaces",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool