import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_notes_id_",
  "toolDescription": "Create or update a note with predefined ID",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/notes/{id}",
  "method": "put",
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