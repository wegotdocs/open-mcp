import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createupload",
  "toolDescription": "Creates an intermediate [Upload](/docs/api-reference/uploads/object) object\nthat you can add [Parts](/docs/api-reference/uploads/part-object) to.\nCurrently, an Upload can accept at most 8 GB in total and expires after an\nhour after you crea",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/uploads",
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
      "filename": "filename",
      "purpose": "purpose",
      "bytes": "bytes",
      "mime_type": "mime_type"
    }
  },
  inputParamsSchema
}

export default tool