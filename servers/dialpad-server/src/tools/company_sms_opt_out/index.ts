import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "company_sms_opt_out",
  "toolDescription": "Company -- Get SMS Opt-out List",
  "baseUrl": "https://dialpad.com",
  "path": "/api/v2/company/{id}/smsoptout",
  "method": "get",
  "security": [
    {
      "key": "apikey",
      "value": "<mcp-env-var>APIKEY</mcp-env-var>",
      "in": "query",
      "envVarName": "APIKEY"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "query": {
      "a2p_campaign_id": "a2p_campaign_id",
      "cursor": "cursor",
      "opt_out_state": "opt_out_state"
    }
  },
  inputParamsSchema
}

export default tool