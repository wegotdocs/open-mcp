import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_custom_events",
  "toolDescription": "Create a custom event",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/custom-events",
  "method": "post",
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
      "eventType": "eventType",
      "title": "title",
      "description": "description",
      "chronology": "chronology",
      "scheduleInstruction": "scheduleInstruction",
      "createdTime": "createdTime",
      "rulesCount": "rulesCount"
    }
  },
  inputParamsSchema
}

export default tool