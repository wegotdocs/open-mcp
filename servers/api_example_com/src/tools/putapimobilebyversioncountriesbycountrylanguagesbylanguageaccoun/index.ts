import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "putapimobilebyversioncountriesbycountrylanguagesbylanguageaccoun",
  "toolDescription": "Update user birthdate",
  "baseUrl": "https://api.example.com",
  "path": "/api/mobile/{version}/countries/{country}/languages/{language}/account/birthdate",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "version": "version",
      "country": "country",
      "language": "language"
    },
    "body": {
      "day": "day",
      "month": "month",
      "year": "year"
    }
  },
  inputParamsSchema
}

export default tool