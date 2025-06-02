import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getapimobilebyversioncountriesbycountrylanguagesbylanguageproduc",
  "toolDescription": "Get Product Sizes",
  "baseUrl": "https://api.example.com",
  "path": "/api/mobile/{version}/countries/{country}/languages/{language}/product/{productId}/{colorId}/sizes",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "version": "version",
      "country": "country",
      "language": "language",
      "productId": "productId",
      "colorId": "colorId"
    }
  },
  inputParamsSchema
}

export default tool