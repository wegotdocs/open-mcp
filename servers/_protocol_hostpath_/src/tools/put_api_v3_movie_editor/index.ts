import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_api_v3_movie_editor",
  "toolDescription": "",
  "baseUrl": "{protocol}://{hostpath}",
  "path": "/api/v3/movie/editor",
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
      "movieIds": "movieIds",
      "monitored": "monitored",
      "qualityProfileId": "qualityProfileId",
      "minimumAvailability": "minimumAvailability",
      "rootFolderPath": "rootFolderPath",
      "tags": "tags",
      "applyTags": "applyTags",
      "moveFiles": "moveFiles",
      "deleteFiles": "deleteFiles",
      "addImportExclusion": "addImportExclusion"
    }
  },
  inputParamsSchema
}

export default tool