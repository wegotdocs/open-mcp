import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "findplacefromtext",
  "toolDescription": "A Find Place request takes a text input and returns a place. The input can be any kind of Places text data, such as a name, address, or phone number. The request must be a string. A Find Place request using non-string data such as a lat/lng",
  "baseUrl": "https://maps.googleapis.com",
  "path": "/maps/api/place/findplacefromtext/json",
  "method": "get",
  "security": [
    {
      "key": "key",
      "value": "<mcp-env-var>KEY</mcp-env-var>",
      "in": "query",
      "envVarName": "KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "fields": "fields",
      "input": "input",
      "inputtype": "inputtype",
      "locationbias": "locationbias",
      "language": "language"
    }
  },
  inputParamsSchema
}

export default tool