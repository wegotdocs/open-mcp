import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "patch_v3_0_dmm_models_id_",
  "toolDescription": "Enable or disable a detection model",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/dmm/models/{id}",
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
    "path": {
      "id": "id"
    },
    "body": {
      "enabled": "enabled"
    }
  },
  inputParamsSchema
}

export default tool