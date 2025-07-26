import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "tests_update",
  "toolDescription": "",
  "baseUrl": "https://demo.defectdojo.org/api/v2",
  "path": "/api/v2/tests/{id}/",
  "method": "put",
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
    "path": {
      "id": "id"
    },
    "body": {
      "tags": "tags",
      "scan_type": "scan_type",
      "title": "title",
      "description": "description",
      "target_start": "target_start",
      "target_end": "target_end",
      "percent_complete": "percent_complete",
      "version": "version",
      "build_id": "build_id",
      "commit_hash": "commit_hash",
      "branch_tag": "branch_tag",
      "lead": "lead",
      "test_type": "test_type",
      "environment": "environment",
      "api_scan_configuration": "api_scan_configuration"
    }
  },
  inputParamsSchema
}

export default tool