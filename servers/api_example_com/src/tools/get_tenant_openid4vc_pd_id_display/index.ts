import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_tenant_openid4vc_pd_id_display",
  "toolDescription": "Get display options for a presentation definition object",
  "baseUrl": "https://api.example.com",
  "path": "/{tenant}/openid4vc/pd/{id}/display",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "tenant": "tenant",
      "id": "id"
    }
  },
  inputParamsSchema
}

export default tool