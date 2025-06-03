import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_v3_0_datalake_datapipelines_id_packages_packageid_",
  "toolDescription": "Get package",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/datalake/dataPipelines/{id}/packages/{packageId}",
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
      "id": "id",
      "packageId": "packageId"
    }
  },
  inputParamsSchema
}

export default tool