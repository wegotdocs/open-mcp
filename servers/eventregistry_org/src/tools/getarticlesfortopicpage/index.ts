import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getarticlesfortopicpage",
  "toolDescription": "Obtain articles that match a user generated topic page",
  "baseUrl": "https://eventregistry.org",
  "path": "/api/v1/article/getArticlesForTopicPage",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "apiKey": "apiKey",
      "uri": "uri",
      "resultType": "resultType",
      "maxDaysBack": "maxDaysBack",
      "onlyAfterTm": "onlyAfterTm",
      "articlesPage": "articlesPage",
      "articlesCount": "articlesCount",
      "articlesSortBy": "articlesSortBy",
      "articlesSortByAsc": "articlesSortByAsc",
      "dataType": "dataType",
      "articleBodyLen": "articleBodyLen",
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
      "includeSourceTitle": "includeSourceTitle",
      "includeSourceDescription": "includeSourceDescription",
      "includeSourceLocation": "includeSourceLocation",
      "includeSourceRanking": "includeSourceRanking",
      "includeConceptLabel": "includeConceptLabel",
      "includeConceptImage": "includeConceptImage",
      "includeConceptSynonyms": "includeConceptSynonyms",
      "includeConceptTrendingScore": "includeConceptTrendingScore",
      "conceptLang": "conceptLang",
      "includeCategoryParentUri": "includeCategoryParentUri",
      "includeLocationPopulation": "includeLocationPopulation",
      "includeLocationGeoNamesId": "includeLocationGeoNamesId",
      "includeLocationCountryArea": "includeLocationCountryArea",
      "includeLocationCountryContinent": "includeLocationCountryContinent"
    }
  },
  inputParamsSchema
}

export default tool