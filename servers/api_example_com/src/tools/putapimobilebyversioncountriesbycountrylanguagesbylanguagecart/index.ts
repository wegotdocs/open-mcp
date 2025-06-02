import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "putapimobilebyversioncountriesbycountrylanguagesbylanguagecart",
  "toolDescription": "Save a cart",
  "baseUrl": "https://api.example.com",
  "path": "/api/mobile/{version}/countries/{country}/languages/{language}/cart",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "version": "version",
      "country": "country",
      "language": "language"
    },
    "body": {
      "quantity": "quantity",
      "sizeId": "sizeId",
      "variantId": "variantId"
    }
  },
  inputParamsSchema
}

export default tool