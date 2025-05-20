import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dcim_cable_terminations_list",
  "toolDescription": "Get a list of cable termination objects.",
  "baseUrl": "https://api.example.com",
  "path": "/api/dcim/cable-terminations/",
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
      "cable": "cable",
      "cable__n": "cable__n",
      "cable_end": "cable_end",
      "created": "created",
      "created__empty": "created__empty",
      "created__gt": "created__gt",
      "created__gte": "created__gte",
      "created__lt": "created__lt",
      "created__lte": "created__lte",
      "created__n": "created__n",
      "created_by_request": "created_by_request",
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
      "offset": "offset",
      "ordering": "ordering",
      "termination_id": "termination_id",
      "termination_id__empty": "termination_id__empty",
      "termination_id__gt": "termination_id__gt",
      "termination_id__gte": "termination_id__gte",
      "termination_id__lt": "termination_id__lt",
      "termination_id__lte": "termination_id__lte",
      "termination_id__n": "termination_id__n",
      "termination_type": "termination_type",
      "termination_type__n": "termination_type__n",
      "updated_by_request": "updated_by_request"
    }
  },
  inputParamsSchema
}

export default tool