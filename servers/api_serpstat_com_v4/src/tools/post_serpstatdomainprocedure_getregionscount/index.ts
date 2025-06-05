import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_serpstatdomainprocedure_getregionscount",
  "toolDescription": "getRegionsCount",
  "baseUrl": "https://api.serpstat.com/v4",
  "path": "/#SerpstatDomainProcedure.getRegionsCount",
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