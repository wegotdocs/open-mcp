import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_v3_0_asrm_highriskdevices_id_",
  "toolDescription": "Get device risk profile",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/asrm/highRiskDevices/{id}",
  "method": "get",
  "security": [
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
      "riskyEventScore": "riskyEventScore"
    }
  },
  inputParamsSchema
}

export default tool