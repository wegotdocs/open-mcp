import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "patch_v3_0_datalake_datapipelines_id_",
  "toolDescription": "Update pipeline settings",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/datalake/dataPipelines/{id}",
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
      "type": "type",
      "subType": "subType",
      "description": "description"
    }
  },
  inputParamsSchema
}

export default tool