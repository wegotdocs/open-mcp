import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_api_v3_indexer_id_",
  "toolDescription": "",
  "baseUrl": "{protocol}://{hostpath}",
  "path": "/api/v3/indexer/{id}",
  "method": "put",
  "security": [
    {
      "key": "X-Api-Key",
      "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_API_KEY"
    },
    {
      "key": "apikey",
      "value": "<mcp-env-var>APIKEY</mcp-env-var>",
      "in": "query",
      "envVarName": "APIKEY"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "query": {
      "forceSave": "forceSave"
    },
    "body": {
      "id": "b_id",
      "name": "name",
      "fields": "fields",
      "implementationName": "implementationName",
      "implementation": "implementation",
      "configContract": "configContract",
      "infoLink": "infoLink",
      "message": "message",
      "tags": "tags",
      "presets": "presets",
      "enableRss": "enableRss",
      "enableAutomaticSearch": "enableAutomaticSearch",
      "enableInteractiveSearch": "enableInteractiveSearch",
      "supportsRss": "supportsRss",
      "supportsSearch": "supportsSearch",
      "protocol": "protocol",
      "priority": "priority",
      "downloadClientId": "downloadClientId"
    }
  },
  inputParamsSchema
}

export default tool