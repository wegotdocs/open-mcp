import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "codespaces_get_export_details_for_authenticated_user",
  "toolDescription": "Get details about a codespace export",
  "baseUrl": "https://api.github.com",
  "path": "/user/codespaces/{codespace_name}/exports/{export_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "codespace_name": "codespace_name",
      "export_id": "export_id"
    }
  },
  inputParamsSchema
}

export default tool