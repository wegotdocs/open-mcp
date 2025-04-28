import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "heartbeat_api_v3_edge_dev_dev_id_patch",
  "toolDescription": "[access code] Heartbeat",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/edge/dev/{dev_id}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "dev_id": "dev_id"
    },
    "query": {
      "display_name": "display_name"
    },
    "header": {
      "access-code": "access-code"
    }
  },
  inputParamsSchema
}

export default tool