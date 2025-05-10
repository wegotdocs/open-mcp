import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "webplayer_register_api_v3_edge_webplayer_register_post",
  "toolDescription": "Register a web player",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/edge/webplayer_register",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "org_access_code": "org_access_code",
      "dev_access_code": "dev_access_code"
    }
  },
  inputParamsSchema
}

export default tool