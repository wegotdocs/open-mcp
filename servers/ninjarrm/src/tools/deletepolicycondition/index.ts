import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletepolicycondition",
  "toolDescription": "Delete policy condition",
  "baseUrl": "https://app.ninjarmm.com/v2/",
  "path": "/v2/policies/{policy_id}/condition/{condition_id}",
  "method": "delete",
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
    "path": {
      "policy_id": "policy_id",
      "condition_id": "condition_id"
    }
  },
  inputParamsSchema
}

export default tool