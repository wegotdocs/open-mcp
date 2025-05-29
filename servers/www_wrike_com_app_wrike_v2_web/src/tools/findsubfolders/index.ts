import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "findsubfolders",
  "toolDescription": "Get the folder's subfolders",
  "baseUrl": "https://www.wrike.com/app/wrike_v2_web",
  "path": "/public/api/v1/folders/{folderId}/folders",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "folderId": "folderId"
    },
    "query": {
      "Pagination": "Pagination",
      "folderIds": "folderIds"
    }
  },
  inputParamsSchema
}

export default tool