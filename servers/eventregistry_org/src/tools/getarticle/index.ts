import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getarticle",
  "toolDescription": "Obtain details about a single or multiple news articles",
  "baseUrl": "https://eventregistry.org",
  "path": "/api/v1/article/getArticle",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "apiKey": "apiKey",
      "articleUri": "articleUri",
      "resultType": "resultType",
      "infoArticleBodyLen": "infoArticleBodyLen",
      "includeArticleTitle": "includeArticleTitle",
      "includeArticleBasicInfo": "includeArticleBasicInfo",
      "includeArticleBody": "includeArticleBody",
      "includeArticleEventUri": "includeArticleEventUri",
      "includeArticleSocialScore": "includeArticleSocialScore",
      "includeArticleSentiment": "includeArticleSentiment",
      "includeArticleConcepts": "includeArticleConcepts",
      "includeArticleCategories": "includeArticleCategories",
      "includeArticleLocation": "includeArticleLocation",
      "includeArticleImage": "includeArticleImage",
      "includeArticleVideos": "includeArticleVideos",
      "includeArticleLinks": "includeArticleLinks",
      "includeArticleExtractedDates": "includeArticleExtractedDates",
      "includeArticleDuplicateList": "includeArticleDuplicateList",
      "includeArticleOriginalArticle": "includeArticleOriginalArticle",
      "includeConceptLabel": "includeConceptLabel",
      "includeConceptImage": "includeConceptImage",
      "includeConceptSynonyms": "includeConceptSynonyms",
      "includeConceptTrendingScore": "includeConceptTrendingScore",
      "conceptLang": "conceptLang",
      "includeSourceTitle": "includeSourceTitle",
      "includeSourceDescription": "includeSourceDescription",
      "includeSourceLocation": "includeSourceLocation",
      "includeSourceRanking": "includeSourceRanking",
      "includeLocationPopulation": "includeLocationPopulation",
      "includeLocationGeoNamesId": "includeLocationGeoNamesId",
      "includeLocationCountryArea": "includeLocationCountryArea",
      "includeLocationCountryContinent": "includeLocationCountryContinent"
    }
  },
  inputParamsSchema
}

export default tool