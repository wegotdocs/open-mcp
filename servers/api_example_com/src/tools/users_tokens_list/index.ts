import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "users_tokens_list",
  "toolDescription": "Get a list of token objects.",
  "baseUrl": "https://api.example.com",
  "path": "/api/users/tokens/",
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
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "query": {
      "created": "created",
      "created__gte": "created__gte",
      "created__lte": "created__lte",
      "description": "description",
      "description__empty": "description__empty",
      "description__ic": "description__ic",
      "description__ie": "description__ie",
      "description__iew": "description__iew",
      "description__isw": "description__isw",
      "description__n": "description__n",
      "description__nic": "description__nic",
      "description__nie": "description__nie",
      "description__niew": "description__niew",
      "description__nisw": "description__nisw",
      "expires": "expires",
      "expires__gte": "expires__gte",
      "expires__lte": "expires__lte",
      "id": "id",
      "id__empty": "id__empty",
      "id__gt": "id__gt",
      "id__gte": "id__gte",
      "id__lt": "id__lt",
      "id__lte": "id__lte",
      "id__n": "id__n",
      "key": "key",
      "key__empty": "key__empty",
      "key__ic": "key__ic",
      "key__ie": "key__ie",
      "key__iew": "key__iew",
      "key__isw": "key__isw",
      "key__n": "key__n",
      "key__nic": "key__nic",
      "key__nie": "key__nie",
      "key__niew": "key__niew",
      "key__nisw": "key__nisw",
      "last_used": "last_used",
      "last_used__empty": "last_used__empty",
      "last_used__gt": "last_used__gt",
      "last_used__gte": "last_used__gte",
      "last_used__lt": "last_used__lt",
      "last_used__lte": "last_used__lte",
      "last_used__n": "last_used__n",
      "limit": "limit",
      "offset": "offset",
      "ordering": "ordering",
      "q": "q",
      "user": "user",
      "user__n": "user__n",
      "user_id": "user_id",
      "user_id__n": "user_id__n",
      "write_enabled": "write_enabled"
    }
  },
  inputParamsSchema
}

export default tool