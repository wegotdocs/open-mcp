import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "users_groups_list",
  "toolDescription": "Get a list of group objects.",
  "baseUrl": "https://api.example.com",
  "path": "/api/users/groups/",
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
      "id": "id",
      "id__empty": "id__empty",
      "id__gt": "id__gt",
      "id__gte": "id__gte",
      "id__lt": "id__lt",
      "id__lte": "id__lte",
      "id__n": "id__n",
      "limit": "limit",
      "name": "name",
      "name__empty": "name__empty",
      "name__ic": "name__ic",
      "name__ie": "name__ie",
      "name__iew": "name__iew",
      "name__isw": "name__isw",
      "name__n": "name__n",
      "name__nic": "name__nic",
      "name__nie": "name__nie",
      "name__niew": "name__niew",
      "name__nisw": "name__nisw",
      "notification_group_id": "notification_group_id",
      "notification_group_id__n": "notification_group_id__n",
      "offset": "offset",
      "ordering": "ordering",
      "permission_id": "permission_id",
      "permission_id__n": "permission_id__n",
      "q": "q",
      "user_id": "user_id",
      "user_id__n": "user_id__n"
    }
  },
  inputParamsSchema
}

export default tool