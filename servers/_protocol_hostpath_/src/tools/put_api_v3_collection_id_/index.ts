import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_api_v3_collection_id_",
  "toolDescription": "",
  "baseUrl": "{protocol}://{hostpath}",
  "path": "/api/v3/collection/{id}",
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
    "body": {
      "id": "b_id",
      "title": "title",
      "sortTitle": "sortTitle",
      "tmdbId": "tmdbId",
      "images": "images",
      "overview": "overview",
      "monitored": "monitored",
      "rootFolderPath": "rootFolderPath",
      "qualityProfileId": "qualityProfileId",
      "searchOnAdd": "searchOnAdd",
      "minimumAvailability": "minimumAvailability",
      "movies": "movies",
      "missingMovies": "missingMovies",
      "tags": "tags"
    }
  },
  inputParamsSchema
}

export default tool