import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "endpoints_list",
  "toolDescription": "",
  "baseUrl": "https://demo.defectdojo.org/api/v2",
  "path": "/api/v2/endpoints/",
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
      "fragment": "fragment",
      "has_tags": "has_tags",
      "host": "host",
      "id": "id",
      "limit": "limit",
      "not_tag": "not_tag",
      "not_tags": "not_tags",
      "o": "o",
      "offset": "offset",
      "path": "path",
      "port": "port",
      "product": "product",
      "protocol": "protocol",
      "query": "query",
      "tag": "tag",
      "tags": "tags",
      "tags__and": "tags__and",
      "userinfo": "userinfo"
    }
  },
  inputParamsSchema
}

export default tool