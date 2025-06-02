import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getapimobilebyversioncountriesbycountrylanguagesbylanguageaccoun",
  "toolDescription": "Get wishlist",
  "baseUrl": "https://api.example.com",
  "path": "/api/mobile/{version}/countries/{country}/languages/{language}/account/wishlist",
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