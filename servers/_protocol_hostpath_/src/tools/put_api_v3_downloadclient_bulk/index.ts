import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_api_v3_downloadclient_bulk",
  "toolDescription": "",
  "baseUrl": "{protocol}://{hostpath}",
  "path": "/api/v3/downloadclient/bulk",
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
      "ids": "ids",
      "tags": "tags",
      "applyTags": "applyTags",
      "enable": "enable",
      "priority": "priority",
      "removeCompletedDownloads": "removeCompletedDownloads",
      "removeFailedDownloads": "removeFailedDownloads"
    }
  },
  inputParamsSchema
}

export default tool