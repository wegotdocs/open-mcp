import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "minutestreamarticles",
  "toolDescription": "The minute stream of news articles added to Event Registry",
  "baseUrl": "https://eventregistry.org",
  "path": "/api/v1/minuteStreamArticles",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "apiKey": "apiKey",
      "recentActivityArticlesMaxArticleCount": "recentActivityArticlesMaxArticleCount",
      "recentActivityArticles*UpdatesAfterUri": "recentActivityArticles*UpdatesAfterUri",
      "recentActivityArticlesUpdatesAfterMinsAgo": "recentActivityArticlesUpdatesAfterMinsAgo",
      "recentActivityArticlesUpdatesAfterTm": "recentActivityArticlesUpdatesAfterTm",
      "articleBodyLen": "articleBodyLen",
      "dataType": "dataType",
      "keyword": "keyword",
      "conceptUri": "conceptUri",
      "categoryUri": "categoryUri",
      "sourceUri": "sourceUri",
      "sourceLocationUri": "sourceLocationUri",
      "sourceGroupUri": "sourceGroupUri",
      "authorUri": "authorUri",
      "locationUri": "locationUri",
      "lang": "lang",
      "keywordLoc": "keywordLoc",
      "keywordOper": "keywordOper",
      "conceptOper": "conceptOper",
      "categoryOper": "categoryOper",
      "startSourceRankPercentile": "startSourceRankPercentile",
      "endSourceRankPercentile": "endSourceRankPercentile",
      "minSentimentArticle": "minSentimentArticle",
      "maxSentimentArticle": "maxSentimentArticle",
      "isDuplicateFilter": "isDuplicateFilter",
      "hasDuplicateFilter": "hasDuplicateFilter",
      "eventFilter": "eventFilter"
    }
  },
  inputParamsSchema
}

export default tool