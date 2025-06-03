import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_v3_0_oat_datapipelines",
  "toolDescription": "Registers a customer to the Observed Attack Techniques data pipeline.",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/oat/dataPipelines",
  "method": "post",
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
      "riskLevels": "riskLevels",
      "hasDetail": "hasDetail",
      "description": "description"
    }
  },
  inputParamsSchema
}

export default tool