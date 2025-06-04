import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateemployee",
  "toolDescription": "Update an employee",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/core/v3/employees/{id}",
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
      "status": "status",
      "gender": "gender",
      "email": "email",
      "contractId": "contractId",
      "code": "code",
      "pin": "pin",
      "nid": "nid",
      "identityNumberType": "identityNumberType",
      "ssn": "ssn",
      "phone": "phone",
      "dateOfBirth": "dateOfBirth",
      "customFields": "customFields",
      "nationality": "nationality",
      "maritalStatus": "maritalStatus",
      "address": "address",
      "postalCode": "postalCode",
      "emergencyPhone": "emergencyPhone",
      "childrenCount": "childrenCount",
      "disability": "disability",
      "personalEmail": "personalEmail",
      "description": "description",
      "city": "city",
      "province": "province",
      "country": "country",
      "salaryRange": "salaryRange",
      "studyLevel": "studyLevel",
      "professionalCategoryCode": "professionalCategoryCode",
      "professionalCategoryDescription": "professionalCategoryDescription",
      "bic": "bic",
      "accountNumber": "accountNumber",
      "jobChargeId": "jobChargeId",
      "workPhone": "workPhone",
      "mainRecruiter": "mainRecruiter",
      "nfc": "nfc"
    }
  },
  inputParamsSchema
}

export default tool