import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "completeupload",
  "toolDescription": "Completes the [Upload](/docs/api-reference/uploads/object). \n\nWithin the returned Upload object, there is a nested [File](/docs/api-reference/files/object) object that is ready to use in the rest of the platform.\n\nYou can specify the order",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/uploads/{upload_id}/complete",
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
    "path": {
      "upload_id": "upload_id"
    },
    "body": {
      "part_ids": "part_ids",
      "md5": "md5"
    }
  },
  inputParamsSchema
}

export default tool