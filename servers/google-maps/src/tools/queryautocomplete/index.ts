import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "queryautocomplete",
  "toolDescription": "The Query Autocomplete service can be used to provide a query prediction for text-based geographic searches, by returning suggested queries as you type.\n\nThe Query Autocomplete service allows you to add on-the-fly geographic query predictio",
  "baseUrl": "https://maps.googleapis.com",
  "path": "/maps/api/place/queryautocomplete/json",
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
      "offset": "offset",
      "location": "location",
      "radius": "radius",
      "language": "language"
    }
  },
  inputParamsSchema
}

export default tool