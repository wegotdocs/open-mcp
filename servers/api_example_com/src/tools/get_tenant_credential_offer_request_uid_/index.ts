import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_tenant_credential_offer_request_uid_",
  "toolDescription": "Gets a credential offer based on the request id",
  "baseUrl": "https://api.example.com",
  "path": "/{tenant}/credential-offer/{request_uid}",
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