import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "registry_update_garbagecollection",
  "toolDescription": "Update Garbage Collection",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/registry/{registry_name}/garbage-collection/{garbage_collection_uuid}",
  "method": "put",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "registry_name": "registry_name",
      "garbage_collection_uuid": "garbage_collection_uuid"
    },
    "body": {
      "cancel": "cancel"
    }
  },
  inputParamsSchema
}

export default tool