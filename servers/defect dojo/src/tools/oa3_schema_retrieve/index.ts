import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "oa3_schema_retrieve",
  "toolDescription": "OpenApi3 schema for this API. Format can be selected via content negotiation.\n\n- YAML: application/vnd.oai.openapi\n- JSON: application/vnd.oai.openapi+json",
  "baseUrl": "https://demo.defectdojo.org/api/v2",
  "path": "/api/v2/oa3/schema/",
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
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
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