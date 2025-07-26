import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "engagements_create",
  "toolDescription": "",
  "baseUrl": "https://demo.defectdojo.org/api/v2",
  "path": "/api/v2/engagements/",
  "method": "post",
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
    "body": {
      "tags": "tags",
      "name": "name",
      "description": "description",
      "version": "version",
      "first_contacted": "first_contacted",
      "target_start": "target_start",
      "target_end": "target_end",
      "reason": "reason",
      "tracker": "tracker",
      "test_strategy": "test_strategy",
      "threat_model": "threat_model",
      "api_test": "api_test",
      "pen_test": "pen_test",
      "check_list": "check_list",
      "status": "status",
      "engagement_type": "engagement_type",
      "build_id": "build_id",
      "commit_hash": "commit_hash",
      "branch_tag": "branch_tag",
      "source_code_management_uri": "source_code_management_uri",
      "deduplication_on_engagement": "deduplication_on_engagement",
      "lead": "lead",
      "requester": "requester",
      "preset": "preset",
      "report_type": "report_type",
      "product": "product",
      "build_server": "build_server",
      "source_code_management_server": "source_code_management_server",
      "orchestration_engine": "orchestration_engine"
    }
  },
  inputParamsSchema
}

export default tool