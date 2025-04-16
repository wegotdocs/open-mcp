import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_api_v3_config_mediamanagement_id_",
  "toolDescription": "",
  "baseUrl": "{protocol}://{hostpath}",
  "path": "/api/v3/config/mediamanagement/{id}",
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
      "autoUnmonitorPreviouslyDownloadedMovies": "autoUnmonitorPreviouslyDownloadedMovies",
      "recycleBin": "recycleBin",
      "recycleBinCleanupDays": "recycleBinCleanupDays",
      "downloadPropersAndRepacks": "downloadPropersAndRepacks",
      "createEmptyMovieFolders": "createEmptyMovieFolders",
      "deleteEmptyFolders": "deleteEmptyFolders",
      "fileDate": "fileDate",
      "rescanAfterRefresh": "rescanAfterRefresh",
      "autoRenameFolders": "autoRenameFolders",
      "pathsDefaultStatic": "pathsDefaultStatic",
      "setPermissionsLinux": "setPermissionsLinux",
      "chmodFolder": "chmodFolder",
      "chownGroup": "chownGroup",
      "skipFreeSpaceCheckWhenImporting": "skipFreeSpaceCheckWhenImporting",
      "minimumFreeSpaceWhenImporting": "minimumFreeSpaceWhenImporting",
      "copyUsingHardlinks": "copyUsingHardlinks",
      "useScriptImport": "useScriptImport",
      "scriptImportPath": "scriptImportPath",
      "importExtraFiles": "importExtraFiles",
      "extraFileExtensions": "extraFileExtensions",
      "enableMediaInfo": "enableMediaInfo"
    }
  },
  inputParamsSchema
}

export default tool