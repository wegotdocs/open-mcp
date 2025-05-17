import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "traintopicontwitter",
  "toolDescription": "Train a topic (concepts and categories) using your own documents",
  "baseUrl": "https://analytics.eventregistry.org/api/v1",
  "path": "/trainTopic",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "apiKey": "apiKey",
      "action": "action",
      "name": "name",
      "uri": "uri",
      "text": "text",
      "maxConcepts": "maxConcepts",
      "maxCategories": "maxCategories",
      "idfNormalization": "idfNormalization"
    }
  },
  inputParamsSchema
}

export default tool