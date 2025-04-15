import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "autocomplete",
  "toolDescription": "The Place Autocomplete service is a web service that returns place predictions in response to an HTTP request. The request specifies a textual search string and optional geographic bounds. The service can be used to provide autocomplete fun",
  "baseUrl": "https://maps.googleapis.com",
  "path": "/maps/api/place/autocomplete/json",
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
      "input": "input",
      "sessiontoken": "sessiontoken",
      "components": "components",
      "strictbounds": "strictbounds",
      "offset": "offset",
      "origin": "origin",
      "location": "location",
      "locationbias": "locationbias",
      "locationrestriction": "locationrestriction",
      "radius": "radius",
      "types": "types",
      "language": "language",
      "region": "region"
    }
  },
  inputParamsSchema
}

export default tool