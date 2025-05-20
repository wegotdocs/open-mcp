import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "tenancy_contact_assignments_list",
  "toolDescription": "Get a list of contact assignment objects.",
  "baseUrl": "https://api.example.com",
  "path": "/api/tenancy/contact-assignments/",
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
      "contact_id": "contact_id",
      "contact_id__n": "contact_id__n",
      "created": "created",
      "created__empty": "created__empty",
      "created__gt": "created__gt",
      "created__gte": "created__gte",
      "created__lt": "created__lt",
      "created__lte": "created__lte",
      "created__n": "created__n",
      "created_by_request": "created_by_request",
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
      "last_updated": "last_updated",
      "last_updated__empty": "last_updated__empty",
      "last_updated__gt": "last_updated__gt",
      "last_updated__gte": "last_updated__gte",
      "last_updated__lt": "last_updated__lt",
      "last_updated__lte": "last_updated__lte",
      "last_updated__n": "last_updated__n",
      "limit": "limit",
      "modified_by_request": "modified_by_request",
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
      "priority": "priority",
      "q": "q",
      "role": "role",
      "role__n": "role__n",
      "role_id": "role_id",
      "role_id__n": "role_id__n",
      "tag": "tag",
      "tag__n": "tag__n",
      "tag_id": "tag_id",
      "tag_id__n": "tag_id__n",
      "updated_by_request": "updated_by_request"
    }
  },
  inputParamsSchema
}

export default tool