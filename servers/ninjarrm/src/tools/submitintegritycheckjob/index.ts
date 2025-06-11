import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "submitintegritycheckjob",
  "toolDescription": "Create an integrity check job",
  "baseUrl": "https://app.ninjarmm.com/v2/",
  "path": "/v2/backup/integrity-check-jobs",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
    {
      "key": "sessionKey",
      "value": "<mcp-env-var>SESSIONKEY</mcp-env-var>",
      "in": "cookie",
      "envVarName": "SESSIONKEY"
    }
  ],
  "paramsMap": {
    "body": {
      "deviceId": "deviceId",
      "planUid": "planUid"
    }
  },
  inputParamsSchema
}

export default tool