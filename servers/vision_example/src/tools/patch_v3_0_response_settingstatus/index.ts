import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "patch_v3_0_response_settingstatus",
  "toolDescription": "Update endpoint response settings",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/response/settingStatus",
  "method": "patch",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "endpointActionException": "endpointActionException",
      "isolatedTrafficException": "isolatedTrafficException"
    }
  },
  inputParamsSchema
}

export default tool