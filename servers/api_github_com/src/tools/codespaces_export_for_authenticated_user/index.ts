import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "codespaces_export_for_authenticated_user",
  "toolDescription": "Export a codespace for the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/user/codespaces/{codespace_name}/exports",
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