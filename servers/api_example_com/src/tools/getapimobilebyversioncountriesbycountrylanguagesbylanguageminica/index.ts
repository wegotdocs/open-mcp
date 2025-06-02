import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getapimobilebyversioncountriesbycountrylanguagesbylanguageminica",
  "toolDescription": "Query Minicart",
  "baseUrl": "https://api.example.com",
  "path": "/api/mobile/{version}/countries/{country}/languages/{language}/minicart",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "version": "version",
      "country": "country",
      "language": "language"
    }
  },
  inputParamsSchema
}

export default tool