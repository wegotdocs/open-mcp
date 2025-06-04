import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatetraining",
  "toolDescription": "Update a training",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/training/v1/trainings/{trainingId}",
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
      "trainingId": "trainingId"
    },
    "body": {
      "name": "name",
      "description": "description",
      "typeId": "typeId",
      "currency": "currency",
      "amountType": "amountType",
      "amount": "amount",
      "durationInHours": "durationInHours",
      "startDate": "startDate",
      "endDate": "endDate",
      "bonusable": "bonusable",
      "trainingEntity": "trainingEntity",
      "bonusPercent": "bonusPercent",
      "email": "email",
      "teacher": "teacher",
      "businessName": "businessName",
      "cif": "cif",
      "phone": "phone"
    }
  },
  inputParamsSchema
}

export default tool