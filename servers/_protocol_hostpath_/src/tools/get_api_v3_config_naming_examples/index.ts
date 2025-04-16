import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_api_v3_config_naming_examples",
  "toolDescription": "",
  "baseUrl": "{protocol}://{hostpath}",
  "path": "/api/v3/config/naming/examples",
  "method": "get",
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
      "renameMovies": "renameMovies",
      "replaceIllegalCharacters": "replaceIllegalCharacters",
      "colonReplacementFormat": "colonReplacementFormat",
      "standardMovieFormat": "standardMovieFormat",
      "movieFolderFormat": "movieFolderFormat",
      "id": "id",
      "resourceName": "resourceName"
    }
  },
  inputParamsSchema
}

export default tool