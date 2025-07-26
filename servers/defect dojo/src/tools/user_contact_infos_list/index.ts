import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "user_contact_infos_list",
  "toolDescription": "",
  "baseUrl": "https://demo.defectdojo.org/api/v2",
  "path": "/api/v2/user_contact_infos/",
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
      "block_execution": "block_execution",
      "cell_number": "cell_number",
      "force_password_reset": "force_password_reset",
      "github_username": "github_username",
      "limit": "limit",
      "offset": "offset",
      "phone_number": "phone_number",
      "prefetch": "prefetch",
      "slack_user_id": "slack_user_id",
      "slack_username": "slack_username",
      "title": "title",
      "twitter_username": "twitter_username",
      "user": "user"
    }
  },
  inputParamsSchema
}

export default tool