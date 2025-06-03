import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatechannel",
  "toolDescription": "Update channel",
  "baseUrl": "https://chat.stream-io-api.com",
  "path": "/channels/{type}/{id}",
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
    "path": {
      "type": "type",
      "id": "id"
    },
    "body": {
      "accept_invite": "accept_invite",
      "add_members": "add_members",
      "add_moderators": "add_moderators",
      "assign_roles": "assign_roles",
      "cooldown": "cooldown",
      "data": "data",
      "demote_moderators": "demote_moderators",
      "hide_history": "hide_history",
      "invites": "invites",
      "message": "message",
      "reject_invite": "reject_invite",
      "remove_members": "remove_members",
      "skip_push": "skip_push",
      "user": "user",
      "user_id": "user_id"
    }
  },
  inputParamsSchema
}

export default tool