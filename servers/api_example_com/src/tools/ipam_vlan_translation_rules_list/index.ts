import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "ipam_vlan_translation_rules_list",
  "toolDescription": "Get a list of VLAN translation rule objects.",
  "baseUrl": "https://api.example.com",
  "path": "/api/ipam/vlan-translation-rules/",
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
      "local_vid": "local_vid",
      "local_vid__empty": "local_vid__empty",
      "local_vid__gt": "local_vid__gt",
      "local_vid__gte": "local_vid__gte",
      "local_vid__lt": "local_vid__lt",
      "local_vid__lte": "local_vid__lte",
      "local_vid__n": "local_vid__n",
      "modified_by_request": "modified_by_request",
      "offset": "offset",
      "ordering": "ordering",
      "policy": "policy",
      "policy__n": "policy__n",
      "policy_id": "policy_id",
      "policy_id__n": "policy_id__n",
      "q": "q",
      "remote_vid": "remote_vid",
      "remote_vid__empty": "remote_vid__empty",
      "remote_vid__gt": "remote_vid__gt",
      "remote_vid__gte": "remote_vid__gte",
      "remote_vid__lt": "remote_vid__lt",
      "remote_vid__lte": "remote_vid__lte",
      "remote_vid__n": "remote_vid__n",
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