import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "add_metatx_requester_holder_route_contracts_contract_id_holders_",
  "toolDescription": "Add Metatx Requester Holder Route",
  "baseUrl": "https://engineapi.moonstream.to/metatx",
  "path": "/contracts/{contract_id}/holders",
  "method": "post",
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
    "body": {
      "holder_id": "holder_id",
      "holder_type": "holder_type",
      "permissions": "permissions"
    }
  },
  inputParamsSchema
}

export default tool