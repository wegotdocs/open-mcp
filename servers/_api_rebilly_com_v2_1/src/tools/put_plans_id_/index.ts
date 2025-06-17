import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_plans_id_",
  "toolDescription": "Create or update a Plan with predefined ID",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/plans/{id}",
  "method": "put",
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
      "name": "name",
      "currency": "currency",
      "currencySign": "currencySign",
      "isActive": "isActive",
      "description": "description",
      "richDescription": "richDescription",
      "recurringAmount": "recurringAmount",
      "recurringPeriodUnit": "recurringPeriodUnit",
      "recurringPeriodLength": "recurringPeriodLength",
      "trialAmount": "trialAmount",
      "trialPeriodUnit": "trialPeriodUnit",
      "trialPeriodLength": "trialPeriodLength",
      "setupAmount": "setupAmount",
      "expiredTime": "expiredTime",
      "contractTermUnit": "contractTermUnit",
      "contractTermLength": "contractTermLength",
      "recurringPeriodLimit": "recurringPeriodLimit",
      "minQuantity": "minQuantity",
      "maxQuantity": "maxQuantity",
      "createdTime": "createdTime",
      "updatedTime": "updatedTime",
      "_links": "_links"
    }
  },
  inputParamsSchema
}

export default tool