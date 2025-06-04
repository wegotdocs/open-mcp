import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "sendmessagestorytext",
  "toolDescription": "💬 Send story text message",
  "baseUrl": "https://gate.whapi.cloud/",
  "path": "/messages/story/text",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
    {
      "key": "token",
      "value": "<mcp-env-var>TOKEN</mcp-env-var>",
      "in": "query",
      "envVarName": "TOKEN"
    }
  ],
  "paramsMap": {
    "body": {
      "contacts": "contacts",
      "exclude_contacts": "exclude_contacts",
      "caption": "caption",
      "background_color": "background_color",
      "caption_color": "caption_color",
      "font_type": "font_type"
    }
  },
  inputParamsSchema
}

export default tool