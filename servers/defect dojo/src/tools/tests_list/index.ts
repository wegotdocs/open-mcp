import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "tests_list",
  "toolDescription": "",
  "baseUrl": "https://demo.defectdojo.org/api/v2",
  "path": "/api/v2/tests/",
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
      "api_scan_configuration": "api_scan_configuration",
      "branch_tag": "branch_tag",
      "build_id": "build_id",
      "commit_hash": "commit_hash",
      "engagement": "engagement",
      "engagement__product__tags": "engagement__product__tags",
      "engagement__product__tags__and": "engagement__product__tags__and",
      "engagement__tags": "engagement__tags",
      "engagement__tags__and": "engagement__tags__and",
      "has_tags": "has_tags",
      "id": "id",
      "limit": "limit",
      "not_engagement__product__tags": "not_engagement__product__tags",
      "not_engagement__tags": "not_engagement__tags",
      "not_tag": "not_tag",
      "not_tags": "not_tags",
      "notes": "notes",
      "o": "o",
      "offset": "offset",
      "percent_complete": "percent_complete",
      "scan_type": "scan_type",
      "tag": "tag",
      "tags": "tags",
      "tags__and": "tags__and",
      "target_end": "target_end",
      "target_start": "target_start",
      "test_type": "test_type",
      "title": "title",
      "version": "version"
    }
  },
  inputParamsSchema
}

export default tool