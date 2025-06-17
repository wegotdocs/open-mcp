import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_notes",
  "toolDescription": "Create a note",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/notes",
  "method": "post",
  "security": [
    {
      "key": "REB-APIKEY",
      "value": "<mcp-env-var>REB_APIKEY</mcp-env-var>",
      "in": "header",
      "envVarName": "REB_APIKEY"
    }
  ],
  "paramsMap": {
    "body": {
      "id": "id",
      "createdBy": "createdBy",
      "content": "content",
      "archived": "archived",
      "relatedType": "relatedType",
      "relatedId": "relatedId",
      "createdTime": "createdTime",
      "updatedTime": "updatedTime",
      "archivedTime": "archivedTime",
      "_links": "_links"
    }
  },
  inputParamsSchema
}

export default tool