import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getreplies",
  "toolDescription": "Get replies",
  "baseUrl": "https://chat.stream-io-api.com",
  "path": "/messages/{parent_id}/replies",
  "method": "get",
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
      "parent_id": "parent_id"
    },
    "query": {
      "sort": "sort",
      "limit": "limit",
      "offset": "offset",
      "id_gte": "id_gte",
      "id_gt": "id_gt",
      "id_lte": "id_lte",
      "id_lt": "id_lt",
      "created_at_after_or_equal": "created_at_after_or_equal",
      "created_at_after": "created_at_after",
      "created_at_before_or_equal": "created_at_before_or_equal",
      "created_at_before": "created_at_before",
      "id_around": "id_around",
      "created_at_around": "created_at_around"
    }
  },
  inputParamsSchema
}

export default tool