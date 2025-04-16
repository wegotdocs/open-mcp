import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "adduploadpart",
  "toolDescription": "Adds a [Part](/docs/api-reference/uploads/part-object) to an [Upload](/docs/api-reference/uploads/object) object. A Part represents a chunk of bytes from the file you are trying to upload. \n\nEach Part can be at most 64 MB, and you can add P",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/uploads/{upload_id}/parts",
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
    }
  },
  inputParamsSchema
}

export default tool