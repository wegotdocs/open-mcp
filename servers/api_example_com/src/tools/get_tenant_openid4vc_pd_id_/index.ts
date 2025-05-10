import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_tenant_openid4vc_pd_id_",
  "toolDescription": "Get presentation definition object by ID",
  "baseUrl": "https://api.example.com",
  "path": "/{tenant}/openid4vc/pd/{id}",
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