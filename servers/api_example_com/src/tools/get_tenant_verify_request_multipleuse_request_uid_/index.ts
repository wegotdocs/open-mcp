import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_tenant_verify_request_multipleuse_request_uid_",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/{tenant}/verify/request/{multipleuse_request_uid}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "tenant": "tenant",
      "multipleuse_request_uid": "multipleuse_request_uid"
    }
  },
  inputParamsSchema
}

export default tool