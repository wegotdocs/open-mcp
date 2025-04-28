import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_frontend_config_api_v3_sys_frontend_config_get",
  "toolDescription": "[user] Get Frontend Config",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/sys/frontend_config",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool