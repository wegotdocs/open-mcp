import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "annotate",
  "toolDescription": "identify people, locations, organizations and things mentioned in the document",
  "baseUrl": "https://analytics.eventregistry.org/api/v1",
  "path": "/annotate",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "apiKey": "apiKey",
      "text": "text",
      "minLinkFrequency": "minLinkFrequency",
      "minLinkRelFrequency": "minLinkRelFrequency",
      "nWordsToIgnoreFromList": "nWordsToIgnoreFromList",
      "minPMentionGivenPhrase": "minPMentionGivenPhrase",
      "pageRankSqThreshold": "pageRankSqThreshold",
      "applyPageRankSqThreshold": "applyPageRankSqThreshold"
    }
  },
  inputParamsSchema
}

export default tool