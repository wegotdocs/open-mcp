import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "extras_journal_entries_list",
  "toolDescription": "Get a list of journal entry objects.",
  "baseUrl": "https://api.example.com",
  "path": "/api/extras/journal-entries/",
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
      "assigned_object_id": "assigned_object_id",
      "assigned_object_id__empty": "assigned_object_id__empty",
      "assigned_object_id__gt": "assigned_object_id__gt",
      "assigned_object_id__gte": "assigned_object_id__gte",
      "assigned_object_id__lt": "assigned_object_id__lt",
      "assigned_object_id__lte": "assigned_object_id__lte",
      "assigned_object_id__n": "assigned_object_id__n",
      "assigned_object_type": "assigned_object_type",
      "assigned_object_type__n": "assigned_object_type__n",
      "assigned_object_type_id": "assigned_object_type_id",
      "assigned_object_type_id__n": "assigned_object_type_id__n",
      "created_after": "created_after",
      "created_before": "created_before",
      "created_by": "created_by",
      "created_by__n": "created_by__n",
      "created_by_id": "created_by_id",
      "created_by_id__n": "created_by_id__n",
      "created_by_request": "created_by_request",
      "id": "id",
      "id__empty": "id__empty",
      "id__gt": "id__gt",
      "id__gte": "id__gte",
      "id__lt": "id__lt",
      "id__lte": "id__lte",
      "id__n": "id__n",
      "kind": "kind",
      "kind__empty": "kind__empty",
      "kind__ic": "kind__ic",
      "kind__ie": "kind__ie",
      "kind__iew": "kind__iew",
      "kind__isw": "kind__isw",
      "kind__n": "kind__n",
      "kind__nic": "kind__nic",
      "kind__nie": "kind__nie",
      "kind__niew": "kind__niew",
      "kind__nisw": "kind__nisw",
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
      "q": "q",
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