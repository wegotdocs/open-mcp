import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_api_v3_importlist_test",
  "toolDescription": "",
  "baseUrl": "{protocol}://{hostpath}",
  "path": "/api/v3/importlist/test",
  "method": "post",
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
    "query": {
      "forceTest": "forceTest"
    },
    "body": {
      "id": "id",
      "name": "name",
      "fields": "fields",
      "implementationName": "implementationName",
      "implementation": "implementation",
      "configContract": "configContract",
      "infoLink": "infoLink",
      "message": "message",
      "tags": "tags",
      "presets": "presets",
      "enabled": "enabled",
      "enableAuto": "enableAuto",
      "monitor": "monitor",
      "rootFolderPath": "rootFolderPath",
      "qualityProfileId": "qualityProfileId",
      "searchOnAdd": "searchOnAdd",
      "minimumAvailability": "minimumAvailability",
      "listType": "listType",
      "listOrder": "listOrder",
      "minRefreshInterval": "minRefreshInterval"
    }
  },
  inputParamsSchema
}

export default tool