import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_tenant_verify_status_request_uid_",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/{tenant}/verify/status/{request_uid}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "tenant": "tenant",
      "request_uid": "request_uid"
    }
  },
  inputParamsSchema
}

export default tool