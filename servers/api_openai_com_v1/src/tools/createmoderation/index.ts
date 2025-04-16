import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createmoderation",
  "toolDescription": "Classifies if text and/or image inputs are potentially harmful. Learn\nmore in the [moderation guide](/docs/guides/moderation).",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/moderations",
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
      "input": "input",
      "model": "model"
    }
  },
  inputParamsSchema
}

export default tool