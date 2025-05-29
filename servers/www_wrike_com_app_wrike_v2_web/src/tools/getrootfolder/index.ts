import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getrootfolder",
  "toolDescription": "Get root folder for a space",
  "baseUrl": "https://www.wrike.com/app/wrike_v2_web",
  "path": "/public/api/v1/spaces/{spaceId}/root/folder",
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
      "spaceId": "spaceId"
    }
  },
  inputParamsSchema
}

export default tool