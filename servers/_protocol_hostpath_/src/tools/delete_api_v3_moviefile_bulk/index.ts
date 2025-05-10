import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_api_v3_moviefile_bulk",
  "toolDescription": "",
  "baseUrl": "{protocol}://{hostpath}",
  "path": "/api/v3/moviefile/bulk",
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
      "movieFileIds": "movieFileIds",
      "languages": "languages",
      "quality": "quality",
      "edition": "edition",
      "releaseGroup": "releaseGroup",
      "sceneName": "sceneName",
      "indexerFlags": "indexerFlags"
    }
  },
  inputParamsSchema
}

export default tool