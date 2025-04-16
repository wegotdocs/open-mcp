import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_api_v3_notification_id_",
  "toolDescription": "",
  "baseUrl": "{protocol}://{hostpath}",
  "path": "/api/v3/notification/{id}",
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
    "query": {
      "forceSave": "forceSave"
    },
    "body": {
      "id": "b_id",
      "name": "name",
      "fields": "fields",
      "implementationName": "implementationName",
      "implementation": "implementation",
      "configContract": "configContract",
      "infoLink": "infoLink",
      "message": "message",
      "tags": "tags",
      "presets": "presets",
      "link": "link",
      "onGrab": "onGrab",
      "onDownload": "onDownload",
      "onUpgrade": "onUpgrade",
      "onRename": "onRename",
      "onMovieAdded": "onMovieAdded",
      "onMovieDelete": "onMovieDelete",
      "onMovieFileDelete": "onMovieFileDelete",
      "onMovieFileDeleteForUpgrade": "onMovieFileDeleteForUpgrade",
      "onHealthIssue": "onHealthIssue",
      "includeHealthWarnings": "includeHealthWarnings",
      "onHealthRestored": "onHealthRestored",
      "onApplicationUpdate": "onApplicationUpdate",
      "onManualInteractionRequired": "onManualInteractionRequired",
      "supportsOnGrab": "supportsOnGrab",
      "supportsOnDownload": "supportsOnDownload",
      "supportsOnUpgrade": "supportsOnUpgrade",
      "supportsOnRename": "supportsOnRename",
      "supportsOnMovieAdded": "supportsOnMovieAdded",
      "supportsOnMovieDelete": "supportsOnMovieDelete",
      "supportsOnMovieFileDelete": "supportsOnMovieFileDelete",
      "supportsOnMovieFileDeleteForUpgrade": "supportsOnMovieFileDeleteForUpgrade",
      "supportsOnHealthIssue": "supportsOnHealthIssue",
      "supportsOnHealthRestored": "supportsOnHealthRestored",
      "supportsOnApplicationUpdate": "supportsOnApplicationUpdate",
      "supportsOnManualInteractionRequired": "supportsOnManualInteractionRequired",
      "testCommand": "testCommand"
    }
  },
  inputParamsSchema
}

export default tool