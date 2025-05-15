import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_v1_businesses_businessid_participants",
  "toolDescription": "Create a participant",
  "baseUrl": "https://api.fincar.com.au/sandbox",
  "path": "/v1/businesses/{businessId}/participants",
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
    "path": {
      "businessId": "businessId"
    },
    "body": {
      "id": "id",
      "participantId": "participantId",
      "employeeId": "employeeId",
      "name": "name",
      "email": "email",
      "employmentStatus": "employmentStatus",
      "employmentStartDate": "employmentStartDate",
      "department": "department",
      "streetAddress": "streetAddress",
      "suburb": "suburb",
      "state": "state",
      "postcode": "postcode",
      "country": "country",
      "phoneNumber": "phoneNumber",
      "salary": "salary",
      "status": "status",
      "createdAt": "createdAt",
      "updatedAt": "updatedAt"
    }
  },
  inputParamsSchema
}

export default tool