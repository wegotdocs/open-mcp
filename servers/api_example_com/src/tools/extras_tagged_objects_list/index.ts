import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "extras_tagged_objects_list",
  "toolDescription": "Get a list of tagged item objects.",
  "baseUrl": "https://api.example.com",
  "path": "/api/extras/tagged-objects/",
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
      "object_type_id__n": "object_type_id__n",
      "offset": "offset",
      "ordering": "ordering",
      "q": "q",
      "tag": "tag",
      "tag__n": "tag__n",
      "tag_id": "tag_id",
      "tag_id__n": "tag_id__n"
    }
  },
  inputParamsSchema
}

export default tool