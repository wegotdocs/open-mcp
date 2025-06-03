import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "patch_v3_0_oat_datapipelines_id_",
  "toolDescription": "Modify data pipeline settings",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/oat/dataPipelines/{id}",
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
      "riskLevels": "riskLevels",
      "hasDetail": "hasDetail",
      "description": "description"
    },
    "header": {
      "If-Match": "If-Match"
    }
  },
  inputParamsSchema
}

export default tool