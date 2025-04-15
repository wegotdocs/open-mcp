import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_registered_contracts_route_contracts_get",
  "toolDescription": "List Registered Contracts Route",
  "baseUrl": "https://engineapi.moonstream.to/metatx",
  "path": "/contracts",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "query": {
      "blockchain": "blockchain",
      "address": "address",
      "limit": "limit",
      "offset": "offset"
    }
  },
  inputParamsSchema
}

export default tool