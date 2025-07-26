import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "engagements_complete_checklist_create",
  "toolDescription": "",
  "baseUrl": "https://demo.defectdojo.org/api/v2",
  "path": "/api/v2/engagements/{id}/complete_checklist/",
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
    "path": {
      "id": "id"
    },
    "body": {
      "session_management": "session_management",
      "encryption_crypto": "encryption_crypto",
      "configuration_management": "configuration_management",
      "authentication": "authentication",
      "authorization_and_access_control": "authorization_and_access_control",
      "data_input_sanitization_validation": "data_input_sanitization_validation",
      "sensitive_data": "sensitive_data",
      "other": "other",
      "session_issues": "session_issues",
      "crypto_issues": "crypto_issues",
      "config_issues": "config_issues",
      "auth_issues": "auth_issues",
      "author_issues": "author_issues",
      "data_issues": "data_issues",
      "sensitive_issues": "sensitive_issues",
      "other_issues": "other_issues"
    }
  },
  inputParamsSchema
}

export default tool