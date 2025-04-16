import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_api_v3_config_indexer_id_",
  "toolDescription": "",
  "baseUrl": "{protocol}://{hostpath}",
  "path": "/api/v3/config/indexer/{id}",
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
      "minimumAge": "minimumAge",
      "maximumSize": "maximumSize",
      "retention": "retention",
      "rssSyncInterval": "rssSyncInterval",
      "preferIndexerFlags": "preferIndexerFlags",
      "availabilityDelay": "availabilityDelay",
      "allowHardcodedSubs": "allowHardcodedSubs",
      "whitelistedHardcodedSubs": "whitelistedHardcodedSubs"
    }
  },
  inputParamsSchema
}

export default tool