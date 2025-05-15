import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_v1_businesses_businessid_",
  "toolDescription": "Update business details",
  "baseUrl": "https://api.fincar.com.au/sandbox",
  "path": "/v1/businesses/{businessId}",
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
      "businessId": "businessId"
    },
    "body": {
      "id": "id",
      "businessId": "b_businessId",
      "name": "name",
      "abn": "abn",
      "acn": "acn",
      "industryType": "industryType",
      "businessSize": "businessSize",
      "streetAddress": "streetAddress",
      "suburb": "suburb",
      "state": "state",
      "postcode": "postcode",
      "country": "country",
      "contactEmail": "contactEmail",
      "phoneNumber": "phoneNumber",
      "website": "website",
      "participantsCount": "participantsCount",
      "packagesEnrolled": "packagesEnrolled",
      "status": "status",
      "createdAt": "createdAt",
      "updatedAt": "updatedAt"
    }
  },
  inputParamsSchema
}

export default tool