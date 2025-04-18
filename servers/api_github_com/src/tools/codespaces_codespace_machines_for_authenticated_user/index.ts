import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "codespaces_codespace_machines_for_authenticated_user",
  "toolDescription": "List machine types for a codespace",
  "baseUrl": "https://api.github.com",
  "path": "/user/codespaces/{codespace_name}/machines",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "codespace_name": "codespace_name"
    }
  },
  inputParamsSchema
}

export default tool