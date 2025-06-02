import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "postapimobilebyversioncountriesbycountrylanguagesbylanguagelogin",
  "toolDescription": "User login",
  "baseUrl": "https://api.example.com",
  "path": "/api/mobile/{version}/countries/{country}/languages/{language}/login",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "version": "version",
      "country": "country",
      "language": "language"
    },
    "body": {
      "email": "email",
      "password": "password"
    }
  },
  inputParamsSchema
}

export default tool