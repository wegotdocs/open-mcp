import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "core_data_files_list",
  "toolDescription": "Get a list of data file objects.",
  "baseUrl": "https://api.example.com",
  "path": "/api/core/data-files/",
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
      "hash": "hash",
      "hash__empty": "hash__empty",
      "hash__ic": "hash__ic",
      "hash__ie": "hash__ie",
      "hash__iew": "hash__iew",
      "hash__isw": "hash__isw",
      "hash__n": "hash__n",
      "hash__nic": "hash__nic",
      "hash__nie": "hash__nie",
      "hash__niew": "hash__niew",
      "hash__nisw": "hash__nisw",
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
      "path": "path",
      "path__empty": "path__empty",
      "path__ic": "path__ic",
      "path__ie": "path__ie",
      "path__iew": "path__iew",
      "path__isw": "path__isw",
      "path__n": "path__n",
      "path__nic": "path__nic",
      "path__nie": "path__nie",
      "path__niew": "path__niew",
      "path__nisw": "path__nisw",
      "q": "q",
      "size": "size",
      "size__empty": "size__empty",
      "size__gt": "size__gt",
      "size__gte": "size__gte",
      "size__lt": "size__lt",
      "size__lte": "size__lte",
      "size__n": "size__n",
      "source": "source",
      "source__n": "source__n",
      "source_id": "source_id",
      "source_id__n": "source_id__n",
      "updated_by_request": "updated_by_request"
    }
  },
  inputParamsSchema
}

export default tool