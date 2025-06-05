import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_v4_token_token_serpstatdomainprocedure_getdomainsinfo",
  "toolDescription": "getDomainsInfo",
  "baseUrl": "https://api.serpstat.com/v4",
  "path": "/#SerpstatDomainProcedure.getDomainsInfo",
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