import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "minutestreamevents",
  "toolDescription": "The stream of events that were added or updated in the last minute",
  "baseUrl": "https://eventregistry.org",
  "path": "/api/v1/minuteStreamEvents",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "apiKey": "apiKey",
      "recentActivityEventsMaxEventCount": "recentActivityEventsMaxEventCount",
      "recentActivityEventsUpdatesAfterMinsAgo": "recentActivityEventsUpdatesAfterMinsAgo",
      "recentActivityEventsUpdatesAfterTm": "recentActivityEventsUpdatesAfterTm",
      "keyword": "keyword",
      "conceptUri": "conceptUri",
      "categoryUri": "categoryUri",
      "sourceUri": "sourceUri",
      "sourceLocationUri": "sourceLocationUri",
      "sourceGroupUri": "sourceGroupUri",
      "authorUri": "authorUri",
      "locationUri": "locationUri",
      "keywordLoc": "keywordLoc",
      "keywordOper": "keywordOper",
      "conceptOper": "conceptOper",
      "categoryOper": "categoryOper",
      "lang": "lang",
      "minArticlesInEvent": "minArticlesInEvent",
      "maxArticlesInEvent": "maxArticlesInEvent"
    }
  },
  inputParamsSchema
}

export default tool