import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dcim_module_type_profiles_list",
  "toolDescription": "Get a list of module type profile objects.",
  "baseUrl": "https://api.example.com",
  "path": "/api/dcim/module-type-profiles/",
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