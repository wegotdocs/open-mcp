import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "extras_config_contexts_update",
  "toolDescription": "Put a config context object.",
  "baseUrl": "https://api.example.com",
  "path": "/api/extras/config-contexts/{id}/",
  "method": "put",
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
    "path": {
      "id": "id"
    },
    "body": {
      "name": "name",
      "weight": "weight",
      "description": "description",
      "is_active": "is_active",
      "regions": "regions",
      "site_groups": "site_groups",
      "sites": "sites",
      "locations": "locations",
      "device_types": "device_types",
      "roles": "roles",
      "platforms": "platforms",
      "cluster_types": "cluster_types",
      "cluster_groups": "cluster_groups",
      "clusters": "clusters",
      "tenant_groups": "tenant_groups",
      "tenants": "tenants",
      "tags": "tags",
      "data_source": "data_source",
      "data": "data"
    }
  },
  inputParamsSchema
}

export default tool