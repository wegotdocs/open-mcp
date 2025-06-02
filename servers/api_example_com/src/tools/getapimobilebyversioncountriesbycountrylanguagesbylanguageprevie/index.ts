import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getapimobilebyversioncountriesbycountrylanguagesbylanguageprevie",
  "toolDescription": "Get preview app home page by id",
  "baseUrl": "https://api.example.com",
  "path": "/api/mobile/{version}/countries/{country}/languages/{language}/preview/app-homes/{id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id",
      "version": "version",
      "country": "country",
      "language": "language"
    }
  },
  inputParamsSchema
}

export default tool