import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getcandidatesbyvacancyandstatus",
  "toolDescription": "Get candidates by vacancy and status",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/recruitment/v1/vacancies/{vacancyId}/candidates",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "vacancyId": "vacancyId"
    },
    "query": {
      "statusId": "statusId"
    }
  },
  inputParamsSchema
}

export default tool