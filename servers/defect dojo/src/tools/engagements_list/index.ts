import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "engagements_list",
  "toolDescription": "",
  "baseUrl": "https://demo.defectdojo.org/api/v2",
  "path": "/api/v2/engagements/",
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
      "active": "active",
      "api_test": "api_test",
      "has_tags": "has_tags",
      "id": "id",
      "limit": "limit",
      "name": "name",
      "not_product__tags": "not_product__tags",
      "not_tag": "not_tag",
      "not_tags": "not_tags",
      "o": "o",
      "offset": "offset",
      "pen_test": "pen_test",
      "product": "product",
      "product__prod_type": "product__prod_type",
      "product__tags": "product__tags",
      "product__tags__and": "product__tags__and",
      "report_type": "report_type",
      "requester": "requester",
      "status": "status",
      "tag": "tag",
      "tags": "tags",
      "tags__and": "tags__and",
      "target_end": "target_end",
      "target_start": "target_start",
      "threat_model": "threat_model",
      "updated": "updated",
      "version": "version"
    }
  },
  inputParamsSchema
}

export default tool