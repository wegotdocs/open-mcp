import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_api_v3_collection",
  "toolDescription": "",
  "baseUrl": "{protocol}://{hostpath}",
  "path": "/api/v3/collection",
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
    "body": {
      "collectionIds": "collectionIds",
      "monitored": "monitored",
      "monitorMovies": "monitorMovies",
      "searchOnAdd": "searchOnAdd",
      "qualityProfileId": "qualityProfileId",
      "rootFolderPath": "rootFolderPath",
      "minimumAvailability": "minimumAvailability"
    }
  },
  inputParamsSchema
}

export default tool