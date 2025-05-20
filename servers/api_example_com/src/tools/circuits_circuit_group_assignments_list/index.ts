import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "circuits_circuit_group_assignments_list",
  "toolDescription": "Get a list of Circuit group assignment objects.",
  "baseUrl": "https://api.example.com",
  "path": "/api/circuits/circuit-group-assignments/",
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
      "circuit": "circuit",
      "circuit_id": "circuit_id",
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
      "member_id": "member_id",
      "member_id__empty": "member_id__empty",
      "member_id__gt": "member_id__gt",
      "member_id__gte": "member_id__gte",
      "member_id__lt": "member_id__lt",
      "member_id__lte": "member_id__lte",
      "member_id__n": "member_id__n",
      "member_type": "member_type",
      "member_type__n": "member_type__n",
      "modified_by_request": "modified_by_request",
      "offset": "offset",
      "ordering": "ordering",
      "priority": "priority",
      "provider": "provider",
      "provider_id": "provider_id",
      "q": "q",
      "tag": "tag",
      "tag__n": "tag__n",
      "tag_id": "tag_id",
      "tag_id__n": "tag_id__n",
      "updated_by_request": "updated_by_request",
      "virtual_circuit": "virtual_circuit",
      "virtual_circuit_id": "virtual_circuit_id"
    }
  },
  inputParamsSchema
}

export default tool