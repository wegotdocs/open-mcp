import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_erpstatdomainprocedure_getadscompetitors",
  "toolDescription": "getAdsCompetitors",
  "baseUrl": "https://api.serpstat.com/v4",
  "path": "/#SerpstatDomainProcedure.getAdsCompetitors",
  "method": "post",
  "security": [
    {
      "key": "token",
      "value": "<mcp-env-var>TOKEN</mcp-env-var>",
      "in": "query",
      "envVarName": "TOKEN"
    }
  ],
  "paramsMap": {
    "body": {
      "id": "id",
      "method": "method",
      "params": "params"
    }
  },
  inputParamsSchema
}

export default tool