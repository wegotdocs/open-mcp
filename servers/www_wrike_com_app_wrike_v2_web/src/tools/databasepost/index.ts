import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "databasepost",
  "toolDescription": "Create a new database within a given folder",
  "baseUrl": "https://www.wrike.com/app/wrike_v2_web",
  "path": "/public/api/v1/databases",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "requestId": "requestId",
      "title": "title",
      "databaseRecordName": "databaseRecordName",
      "parentFolderId": "parentFolderId"
    }
  },
  inputParamsSchema
}

export default tool