import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_api_v3_importlist_bulk",
  "toolDescription": "",
  "baseUrl": "{protocol}://{hostpath}",
  "path": "/api/v3/importlist/bulk",
  "method": "delete",
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
    "body": {
      "ids": "ids",
      "tags": "tags",
      "applyTags": "applyTags",
      "enabled": "enabled",
      "enableAuto": "enableAuto",
      "rootFolderPath": "rootFolderPath",
      "qualityProfileId": "qualityProfileId",
      "minimumAvailability": "minimumAvailability"
    }
  },
  inputParamsSchema
}

export default tool