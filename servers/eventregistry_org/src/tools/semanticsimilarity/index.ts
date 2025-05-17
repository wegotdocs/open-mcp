import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "semanticsimilarity",
  "toolDescription": "Compute semantic similarity of two documents, potentially in different languages",
  "baseUrl": "https://analytics.eventregistry.org/api/v1",
  "path": "/semanticSimilarity",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "apiKey": "apiKey",
      "text1": "text1",
      "text2": "text2"
    }
  },
  inputParamsSchema
}

export default tool