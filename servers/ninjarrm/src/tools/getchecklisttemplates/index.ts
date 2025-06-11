import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getchecklisttemplates",
  "toolDescription": "List checklist templates",
  "baseUrl": "https://app.ninjarmm.com/v2/",
  "path": "/v2/checklist/templates",
  "method": "get",
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
    "query": {
      "checklistTemplateIds": "checklistTemplateIds",
      "checklistTemplateName": "checklistTemplateName",
      "required": "required",
      "includeArchived": "includeArchived"
    }
  },
  inputParamsSchema
}

export default tool