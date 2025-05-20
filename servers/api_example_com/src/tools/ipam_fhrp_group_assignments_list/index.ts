import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "ipam_fhrp_group_assignments_list",
  "toolDescription": "Get a list of FHRP group assignment objects.",
  "baseUrl": "https://api.example.com",
  "path": "/api/ipam/fhrp-group-assignments/",
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
      "created__empty": "created__empty",
      "created__gt": "created__gt",
      "created__gte": "created__gte",
      "created__lt": "created__lt",
      "created__lte": "created__lte",
      "created__n": "created__n",
      "created_by_request": "created_by_request",
      "device": "device",
      "device_id": "device_id",
      "group_id": "group_id",
      "group_id__n": "group_id__n",
      "id": "id",
      "id__empty": "id__empty",
      "id__gt": "id__gt",
      "id__gte": "id__gte",
      "id__lt": "id__lt",
      "id__lte": "id__lte",
      "id__n": "id__n",
      "interface_id": "interface_id",
      "interface_id__empty": "interface_id__empty",
      "interface_id__gt": "interface_id__gt",
      "interface_id__gte": "interface_id__gte",
      "interface_id__lt": "interface_id__lt",
      "interface_id__lte": "interface_id__lte",
      "interface_id__n": "interface_id__n",
      "interface_type": "interface_type",
      "interface_type__n": "interface_type__n",
      "last_updated": "last_updated",
      "last_updated__empty": "last_updated__empty",
      "last_updated__gt": "last_updated__gt",
      "last_updated__gte": "last_updated__gte",
      "last_updated__lt": "last_updated__lt",
      "last_updated__lte": "last_updated__lte",
      "last_updated__n": "last_updated__n",
      "limit": "limit",
      "modified_by_request": "modified_by_request",
      "offset": "offset",
      "ordering": "ordering",
      "priority": "priority",
      "priority__empty": "priority__empty",
      "priority__gt": "priority__gt",
      "priority__gte": "priority__gte",
      "priority__lt": "priority__lt",
      "priority__lte": "priority__lte",
      "priority__n": "priority__n",
      "updated_by_request": "updated_by_request",
      "virtual_machine": "virtual_machine",
      "virtual_machine_id": "virtual_machine_id"
    }
  },
  inputParamsSchema
}

export default tool