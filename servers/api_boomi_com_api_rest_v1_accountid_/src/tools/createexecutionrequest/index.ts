import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createexecutionrequest",
  "toolDescription": "Creates an ExecutionRequest object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/ExecutionRequest",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    }
  ],
  "paramsMap": {
    "body": {
      "DynamicProcessProperties": "DynamicProcessProperties",
      "ProcessProperties": "ProcessProperties",
      "atomId": "atomId",
      "processId": "processId",
      "processName": "processName",
      "recordUrl": "recordUrl",
      "requestId": "requestId"
    }
  },
  inputParamsSchema
}

export default tool