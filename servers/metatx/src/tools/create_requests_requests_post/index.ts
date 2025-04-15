import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_requests_requests_post",
  "toolDescription": "Create Requests",
  "baseUrl": "https://engineapi.moonstream.to/metatx",
  "path": "/requests",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "body": {
      "contract_id": "contract_id",
      "contract_address": "contract_address",
      "specifications": "specifications",
      "ttl_days": "ttl_days",
      "live_at": "live_at"
    }
  },
  inputParamsSchema
}

export default tool