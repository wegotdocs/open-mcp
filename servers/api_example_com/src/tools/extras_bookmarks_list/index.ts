import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "extras_bookmarks_list",
  "toolDescription": "Get a list of bookmark objects.",
  "baseUrl": "https://api.example.com",
  "path": "/api/extras/bookmarks/",
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
      "id": "id",
      "id__empty": "id__empty",
      "id__gt": "id__gt",
      "id__gte": "id__gte",
      "id__lt": "id__lt",
      "id__lte": "id__lte",
      "id__n": "id__n",
      "limit": "limit",
      "object_id": "object_id",
      "object_id__empty": "object_id__empty",
      "object_id__gt": "object_id__gt",
      "object_id__gte": "object_id__gte",
      "object_id__lt": "object_id__lt",
      "object_id__lte": "object_id__lte",
      "object_id__n": "object_id__n",
      "object_type": "object_type",
      "object_type__n": "object_type__n",
      "object_type_id": "object_type_id",
      "object_type_id__empty": "object_type_id__empty",
      "object_type_id__gt": "object_type_id__gt",
      "object_type_id__gte": "object_type_id__gte",
      "object_type_id__lt": "object_type_id__lt",
      "object_type_id__lte": "object_type_id__lte",
      "object_type_id__n": "object_type_id__n",
      "offset": "offset",
      "ordering": "ordering",
      "user": "user",
      "user__n": "user__n",
      "user_id": "user_id",
      "user_id__n": "user_id__n"
    }
  },
  inputParamsSchema
}

export default tool