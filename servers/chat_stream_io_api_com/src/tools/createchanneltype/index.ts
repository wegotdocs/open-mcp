import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createchanneltype",
  "toolDescription": "Create channel type",
  "baseUrl": "https://chat.stream-io-api.com",
  "path": "/channeltypes",
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
      "automod": "automod",
      "automod_behavior": "automod_behavior",
      "blocklist": "blocklist",
      "blocklist_behavior": "blocklist_behavior",
      "blocklists": "blocklists",
      "commands": "commands",
      "connect_events": "connect_events",
      "custom_events": "custom_events",
      "grants": "grants",
      "mark_messages_pending": "mark_messages_pending",
      "max_message_length": "max_message_length",
      "message_retention": "message_retention",
      "mutes": "mutes",
      "name": "name",
      "partition_size": "partition_size",
      "partition_ttl": "partition_ttl",
      "permissions": "permissions",
      "polls": "polls",
      "push_notifications": "push_notifications",
      "reactions": "reactions",
      "read_events": "read_events",
      "replies": "replies",
      "search": "search",
      "skip_last_msg_update_for_system_msgs": "skip_last_msg_update_for_system_msgs",
      "typing_events": "typing_events",
      "uploads": "uploads",
      "url_enrichment": "url_enrichment"
    }
  },
  inputParamsSchema
}

export default tool