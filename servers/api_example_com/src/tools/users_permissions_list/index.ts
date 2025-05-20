import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "users_permissions_list",
  "toolDescription": "Get a list of permission objects.",
  "baseUrl": "https://api.example.com",
  "path": "/api/users/permissions/",
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
      "can_add": "can_add",
      "can_change": "can_change",
      "can_delete": "can_delete",
      "can_view": "can_view",
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
      "enabled": "enabled",
      "group": "group",
      "group__n": "group__n",
      "group_id": "group_id",
      "group_id__n": "group_id__n",
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
      "object_type": "object_type",
      "object_type__ic": "object_type__ic",
      "object_type__ie": "object_type__ie",
      "object_type__iew": "object_type__iew",
      "object_type__isw": "object_type__isw",
      "object_type__n": "object_type__n",
      "object_type__nic": "object_type__nic",
      "object_type__nie": "object_type__nie",
      "object_type__niew": "object_type__niew",
      "object_type__nisw": "object_type__nisw",
      "object_type_id": "object_type_id",
      "object_type_id__n": "object_type_id__n",
      "object_types": "object_types",
      "object_types__n": "object_types__n",
      "offset": "offset",
      "ordering": "ordering",
      "q": "q",
      "user": "user",
      "user__n": "user__n",
      "user_id": "user_id",
      "user_id__n": "user_id__n"
    }
  },
  inputParamsSchema
}

export default tool