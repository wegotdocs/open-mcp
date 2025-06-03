import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_v3_0_datalake_datapipelines_id_packages",
  "toolDescription": "List available packages",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/datalake/dataPipelines/{id}/packages",
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
      "startDateTime": "startDateTime",
      "endDateTime": "endDateTime",
      "top": "top"
    }
  },
  inputParamsSchema
}

export default tool