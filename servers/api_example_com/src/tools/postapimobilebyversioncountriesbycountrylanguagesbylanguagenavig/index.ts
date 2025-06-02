import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "postapimobilebyversioncountriesbycountrylanguagesbylanguagenavig",
  "toolDescription": "Resolves deep links",
  "baseUrl": "https://api.example.com",
  "path": "/api/mobile/{version}/countries/{country}/languages/{language}/navigation/deep-link-navigation",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "version": "version",
      "country": "country",
      "language": "language"
    },
    "body": {
      "url": "url",
      "pageType": "pageType"
    }
  },
  inputParamsSchema
}

export default tool