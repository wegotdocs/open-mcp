import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_serpstatdomainprocedure_getdomainsintersection",
  "toolDescription": "getDomainsIntersection",
  "baseUrl": "https://api.serpstat.com/v4",
  "path": "/#SerpstatDomainProcedure.getDomainsIntersection",
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