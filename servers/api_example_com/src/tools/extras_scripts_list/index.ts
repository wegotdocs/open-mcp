import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "extras_scripts_list",
  "toolDescription": "Get a list of script objects.",
  "baseUrl": "https://api.example.com",
  "path": "/api/extras/scripts/",
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
      "is_executable": "is_executable",
      "limit": "limit",
      "module_id": "module_id",
      "module_id__n": "module_id__n",
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
      "q": "q"
    }
  },
  inputParamsSchema
}

export default tool