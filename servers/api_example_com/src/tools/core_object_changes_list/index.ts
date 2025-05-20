import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "core_object_changes_list",
  "toolDescription": "Retrieve a list of recent changes.",
  "baseUrl": "https://api.example.com",
  "path": "/api/core/object-changes/",
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
      "action": "action",
      "changed_object_id": "changed_object_id",
      "changed_object_id__empty": "changed_object_id__empty",
      "changed_object_id__gt": "changed_object_id__gt",
      "changed_object_id__gte": "changed_object_id__gte",
      "changed_object_id__lt": "changed_object_id__lt",
      "changed_object_id__lte": "changed_object_id__lte",
      "changed_object_id__n": "changed_object_id__n",
      "changed_object_type": "changed_object_type",
      "changed_object_type__n": "changed_object_type__n",
      "changed_object_type_id": "changed_object_type_id",
      "changed_object_type_id__n": "changed_object_type_id__n",
      "id": "id",
      "id__empty": "id__empty",
      "id__gt": "id__gt",
      "id__gte": "id__gte",
      "id__lt": "id__lt",
      "id__lte": "id__lte",
      "id__n": "id__n",
      "limit": "limit",
      "object_repr": "object_repr",
      "object_repr__empty": "object_repr__empty",
      "object_repr__ic": "object_repr__ic",
      "object_repr__ie": "object_repr__ie",
      "object_repr__iew": "object_repr__iew",
      "object_repr__isw": "object_repr__isw",
      "object_repr__n": "object_repr__n",
      "object_repr__nic": "object_repr__nic",
      "object_repr__nie": "object_repr__nie",
      "object_repr__niew": "object_repr__niew",
      "object_repr__nisw": "object_repr__nisw",
      "offset": "offset",
      "ordering": "ordering",
      "q": "q",
      "related_object_id": "related_object_id",
      "related_object_id__empty": "related_object_id__empty",
      "related_object_id__gt": "related_object_id__gt",
      "related_object_id__gte": "related_object_id__gte",
      "related_object_id__lt": "related_object_id__lt",
      "related_object_id__lte": "related_object_id__lte",
      "related_object_id__n": "related_object_id__n",
      "related_object_type": "related_object_type",
      "related_object_type__n": "related_object_type__n",
      "request_id": "request_id",
      "time_after": "time_after",
      "time_before": "time_before",
      "user": "user",
      "user__n": "user__n",
      "user_id": "user_id",
      "user_id__n": "user_id__n",
      "user_name": "user_name",
      "user_name__empty": "user_name__empty",
      "user_name__ic": "user_name__ic",
      "user_name__ie": "user_name__ie",
      "user_name__iew": "user_name__iew",
      "user_name__isw": "user_name__isw",
      "user_name__n": "user_name__n",
      "user_name__nic": "user_name__nic",
      "user_name__nie": "user_name__nie",
      "user_name__niew": "user_name__niew",
      "user_name__nisw": "user_name__nisw"
    }
  },
  inputParamsSchema
}

export default tool