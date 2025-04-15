import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_registered_contract_route_contracts_contract_id_get",
  "toolDescription": "Get Registered Contract Route",
  "baseUrl": "https://engineapi.moonstream.to/metatx",
  "path": "/contracts/{contract_id}",
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
    }
  },
  inputParamsSchema
}

export default tool