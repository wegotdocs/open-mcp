import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_files_id_",
  "toolDescription": "Update the File with predefined ID. Note that file can be uploaded with POST only.",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/files/{id}",
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
      "name": "name",
      "extension": "extension",
      "description": "description",
      "url": "url",
      "tags": "tags",
      "mime": "mime",
      "size": "size",
      "width": "width",
      "height": "height",
      "sha1": "sha1",
      "createdTime": "createdTime",
      "updatedTime": "updatedTime",
      "_links": "_links"
    }
  },
  inputParamsSchema
}

export default tool