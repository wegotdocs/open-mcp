import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "postapimobilebyversioncountriesbycountrylanguagesbylanguageregis",
  "toolDescription": "Account creation",
  "baseUrl": "https://api.example.com",
  "path": "/api/mobile/{version}/countries/{country}/languages/{language}/register",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "version": "version",
      "country": "country",
      "language": "language"
    },
    "body": {
      "firstName": "firstName",
      "lastName": "lastName",
      "password": "password",
      "shippingCountry": "shippingCountry",
      "email": "email",
      "gender": "gender",
      "newsletterAccepted": "newsletterAccepted",
      "birthDate": "birthDate"
    }
  },
  inputParamsSchema
}

export default tool