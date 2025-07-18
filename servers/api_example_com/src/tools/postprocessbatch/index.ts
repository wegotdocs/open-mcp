import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "postprocessbatch",
  "toolDescription": "Start the batch process of the received transcripts.",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/process/batch",
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
    "body": {
      "url": "url",
      "prompt": "prompt",
      "useCaseId": "useCaseId",
      "entryType": "entryType",
      "exitType": "exitType",
      "jsonPath": "jsonPath"
    }
  },
  inputParamsSchema
}

export default tool