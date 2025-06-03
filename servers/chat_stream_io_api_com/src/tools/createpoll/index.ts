import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createpoll",
  "toolDescription": "Create poll",
  "baseUrl": "https://chat.stream-io-api.com",
  "path": "/polls",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    },
    {
      "key": "api_key",
      "value": "<mcp-env-var>API_KEY</mcp-env-var>",
      "in": "query",
      "envVarName": "API_KEY"
    },
    {
      "key": "Stream-Auth-Type",
      "value": "<mcp-env-var>STREAM_AUTH_TYPE</mcp-env-var>",
      "in": "header",
      "envVarName": "STREAM_AUTH_TYPE"
    },
    {
      "key": "api_key",
      "value": "<mcp-env-var>API_KEY</mcp-env-var>",
      "in": "query",
      "envVarName": "API_KEY"
    },
    {
      "key": "Stream-Auth-Type",
      "value": "<mcp-env-var>STREAM_AUTH_TYPE</mcp-env-var>",
      "in": "header",
      "envVarName": "STREAM_AUTH_TYPE"
    }
  ],
  "paramsMap": {
    "body": {
      "Custom": "Custom",
      "allow_answers": "allow_answers",
      "allow_user_suggested_options": "allow_user_suggested_options",
      "description": "description",
      "enforce_unique_vote": "enforce_unique_vote",
      "id": "id",
      "is_closed": "is_closed",
      "max_votes_allowed": "max_votes_allowed",
      "name": "name",
      "options": "options",
      "user": "user",
      "user_id": "user_id",
      "voting_visibility": "voting_visibility"
    }
  },
  inputParamsSchema
}

export default tool