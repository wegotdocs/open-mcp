import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "geteventsfortopicpage",
  "toolDescription": "Obtain events that match a user generated topic page",
  "baseUrl": "https://eventregistry.org",
  "path": "/api/v1/event/getEventsForTopicPage",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "apiKey": "apiKey",
      "uri": "uri",
      "resultType": "resultType",
      "eventsPage": "eventsPage",
      "eventsCount": "eventsCount",
      "eventsSortBy": "eventsSortBy",
      "eventsSortByAsc": "eventsSortByAsc",
      "includeEventTitle": "includeEventTitle",
      "includeEventSummary": "includeEventSummary",
      "includeEventSocialScore": "includeEventSocialScore",
      "includeEventSentiment": "includeEventSentiment",
      "includeEventLocation": "includeEventLocation",
      "includeEventDate": "includeEventDate",
      "includeEventArticleCounts": "includeEventArticleCounts",
      "includeEventConcepts": "includeEventConcepts",
      "includeEventCategories": "includeEventCategories",
      "includeEventCommonDates": "includeEventCommonDates",
      "includeEventStories": "includeEventStories",
      "eventImageCount": "eventImageCount",
      "includeConceptLabel": "includeConceptLabel",
      "includeConceptImage": "includeConceptImage",
      "includeConceptSynonyms": "includeConceptSynonyms",
      "conceptLang": "conceptLang",
      "includeStoryBasicStats": "includeStoryBasicStats",
      "includeStoryTitle": "includeStoryTitle",
      "includeStoryLocation": "includeStoryLocation",
      "includeStoryDate": "includeStoryDate",
      "includeStoryConcepts": "includeStoryConcepts",
      "includeStoryCategories": "includeStoryCategories",
      "includeStoryMedoidArticle": "includeStoryMedoidArticle",
      "includeStoryCommonDates": "includeStoryCommonDates",
      "storyImageCount": "storyImageCount",
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