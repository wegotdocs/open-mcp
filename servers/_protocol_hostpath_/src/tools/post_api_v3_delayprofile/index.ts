import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_api_v3_delayprofile",
  "toolDescription": "",
  "baseUrl": "{protocol}://{hostpath}",
  "path": "/api/v3/delayprofile",
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
    "body": {
      "id": "id",
      "enableUsenet": "enableUsenet",
      "enableTorrent": "enableTorrent",
      "preferredProtocol": "preferredProtocol",
      "usenetDelay": "usenetDelay",
      "torrentDelay": "torrentDelay",
      "bypassIfHighestQuality": "bypassIfHighestQuality",
      "bypassIfAboveCustomFormatScore": "bypassIfAboveCustomFormatScore",
      "minimumCustomFormatScore": "minimumCustomFormatScore",
      "order": "order",
      "tags": "tags"
    }
  },
  inputParamsSchema
}

export default tool