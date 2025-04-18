import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "codespaces_start_for_authenticated_user",
  "toolDescription": "Start a codespace for the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/user/codespaces/{codespace_name}/start",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "codespace_name": "codespace_name"
    }
  },
  inputParamsSchema
}

export default tool