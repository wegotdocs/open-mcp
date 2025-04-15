import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_contract_route_contracts_contract_id_put",
  "toolDescription": "Update Contract Route",
  "baseUrl": "https://engineapi.moonstream.to/metatx",
  "path": "/contracts/{contract_id}",
  "method": "put",
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
      "title": "title",
      "description": "description",
      "image_uri": "image_uri",
      "ignore_nulls": "ignore_nulls"
    }
  },
  inputParamsSchema
}

export default tool