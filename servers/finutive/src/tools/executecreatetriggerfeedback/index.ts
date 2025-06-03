import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "executecreatetriggerfeedback",
  "toolDescription": "Create trigger feedback",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/services/triggers/{trigger_id}/feedback",
  "method": "post",
  "security": [
    {
      "key": "wzu",
      "value": "<mcp-env-var>WZU</mcp-env-var>",
      "in": "cookie",
      "envVarName": "WZU"
    }
  ],
  "paramsMap": {
    "path": {
      "business_id": "business_id",
      "trigger_id": "trigger_id"
    },
    "body": {
      "view": "view",
      "feedback": "feedback"
    }
  },
  inputParamsSchema
}

export default tool