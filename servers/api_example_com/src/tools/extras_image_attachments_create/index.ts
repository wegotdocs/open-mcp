import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "extras_image_attachments_create",
  "toolDescription": "Post a list of image attachment objects.",
  "baseUrl": "https://api.example.com",
  "path": "/api/extras/image-attachments/",
  "method": "post",
  "security": [
    {
      "key": "sessionid",
      "value": "<mcp-env-var>SESSIONID</mcp-env-var>",
      "in": "cookie",
      "envVarName": "SESSIONID"
    },
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "body": {
      "object_type": "object_type",
      "object_id": "object_id",
      "name": "name",
      "image": "image"
    }
  },
  inputParamsSchema
}

export default tool