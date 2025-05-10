import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_api_v3_qualityprofile",
  "toolDescription": "",
  "baseUrl": "{protocol}://{hostpath}",
  "path": "/api/v3/qualityprofile",
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
      "name": "name",
      "upgradeAllowed": "upgradeAllowed",
      "cutoff": "cutoff",
      "items": "items",
      "minFormatScore": "minFormatScore",
      "cutoffFormatScore": "cutoffFormatScore",
      "minUpgradeFormatScore": "minUpgradeFormatScore",
      "formatItems": "formatItems",
      "language": "language"
    }
  },
  inputParamsSchema
}

export default tool