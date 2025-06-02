import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getapimobilebyversioncountriesbycountrylanguagesbylanguageviewmy",
  "toolDescription": "Get my account page",
  "baseUrl": "https://api.example.com",
  "path": "/api/mobile/{version}/countries/{country}/languages/{language}/view/my-account",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "version": "version",
      "country": "country",
      "language": "language"
    },
    "query": {
      "isNewAccount": "isNewAccount",
      "isNewsletterAccepted": "isNewsletterAccepted"
    }
  },
  inputParamsSchema
}

export default tool