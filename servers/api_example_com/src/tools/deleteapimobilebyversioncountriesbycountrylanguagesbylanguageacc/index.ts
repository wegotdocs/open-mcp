import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deleteapimobilebyversioncountriesbycountrylanguagesbylanguageacc",
  "toolDescription": "Delete account",
  "baseUrl": "https://api.example.com",
  "path": "/api/mobile/{version}/countries/{country}/languages/{language}/account",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "version": "version",
      "country": "country",
      "language": "language"
    },
    "body": {
      "password": "password"
    }
  },
  inputParamsSchema
}

export default tool