import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "uploadfile",
  "toolDescription": "Uploads an image.",
  "baseUrl": "/api/v3",
  "path": "/pet/{petId}/uploadImage",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "petId": "petId"
    },
    "query": {
      "additionalMetadata": "additionalMetadata"
    }
  },
  inputParamsSchema
}

export default tool