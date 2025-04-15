import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "register_contract_route_contracts_post",
  "toolDescription": "Register Contract Route",
  "baseUrl": "https://engineapi.moonstream.to/metatx",
  "path": "/contracts",
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
    "body": {
      "blockchain": "blockchain",
      "address": "address",
      "title": "title",
      "description": "description",
      "image_uri": "image_uri"
    }
  },
  inputParamsSchema
}

export default tool