import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "register_api_v3_edge_register_post",
  "toolDescription": "Register a device",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/edge/register",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "name": "name",
      "data": "data"
    }
  },
  inputParamsSchema
}

export default tool