import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatecandidate",
  "toolDescription": "Update a candidate",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/recruitment/v1/candidates/{id}",
  "method": "put",
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
      "id": "id"
    },
    "body": {
      "firstName": "firstName",
      "lastName": "lastName",
      "email": "email",
      "phone": "phone",
      "linkedinURL": "linkedinURL",
      "desiredSalary": "desiredSalary",
      "startWorkDate": "startWorkDate",
      "web": "web",
      "location": "location",
      "vacancyId": "vacancyId",
      "statusId": "statusId"
    }
  },
  inputParamsSchema
}

export default tool