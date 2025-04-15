import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_metatx_requester_holders_route_contracts_contract_id_holder",
  "toolDescription": "List Metatx Requester Holders Route",
  "baseUrl": "https://engineapi.moonstream.to/metatx",
  "path": "/contracts/{contract_id}/holders",
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
    "path": {
      "contract_id": "contract_id"
    },
    "query": {
      "extended": "extended"
    }
  },
  inputParamsSchema
}

export default tool