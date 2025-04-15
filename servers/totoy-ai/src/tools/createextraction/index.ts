import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createextraction",
  "toolDescription": "Extracts structured data from a Document",
  "baseUrl": "https://api.totoy.ai/v1",
  "path": "/extraction",
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
      "model": "model",
      "document": "document",
      "expand_abbreviations": "expand_abbreviations"
    }
  },
  inputParamsSchema
}

export default tool