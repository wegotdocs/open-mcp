import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "schema_retrieve",
  "toolDescription": "OpenApi3 schema for this API. Format can be selected via content negotiation.\n\n- YAML: application/vnd.oai.openapi\n- JSON: application/vnd.oai.openapi+json",
  "baseUrl": "https://api.example.com",
  "path": "/api/schema/",
  "method": "get",
  "security": [
    {
      "key": "sessionid",
      "value": "<mcp-env-var>SESSIONID</mcp-env-var>",
      "in": "cookie",
      "envVarName": "SESSIONID"
    },
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "query": {
      "format": "format",
      "lang": "lang"
    }
  },
  inputParamsSchema
}

export default tool