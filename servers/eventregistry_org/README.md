# @open-mcp/eventregistry_org

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "eventregistry_org": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/eventregistry_org@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/eventregistry_org@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
# No environment variables required for this server
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add eventregistry_org \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add eventregistry_org \
  .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/config add eventregistry_org \
  /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "eventregistry_org": {
      "command": "npx",
      "args": ["-y", "@open-mcp/eventregistry_org"],
      "env": {}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request


## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### annotate

**Environment variables**

No environment variables required

**Input schema**

- `apiKey` (string)
- `text` (string)
- `minLinkFrequency` (integer)
- `minLinkRelFrequency` (number)
- `nWordsToIgnoreFromList` (integer)
- `minPMentionGivenPhrase` (number)
- `pageRankSqThreshold` (number)
- `applyPageRankSqThreshold` (boolean)

### categorize

**Environment variables**

No environment variables required

**Input schema**

- `apiKey` (string)
- `text` (string)
- `taxonomy` (string)

### semanticsimilarity

**Environment variables**

No environment variables required

**Input schema**

- `apiKey` (string)
- `text1` (string)
- `text2` (string)

### sentiment

**Environment variables**

No environment variables required

**Input schema**

- `apiKey` (string)
- `text` (string)
- `sentences` (integer)

### sentiment

**Environment variables**

No environment variables required

**Input schema**

- `apiKey` (string)
- `text` (string)
- `sentences` (integer)

### extractarticleinfo

**Environment variables**

No environment variables required

**Input schema**

- `apiKey` (string)
- `url` (string)

### detectlanguage

**Environment variables**

No environment variables required

**Input schema**

- `apiKey` (string)
- `text` (string)

### traintopicontwitter

**Environment variables**

No environment variables required

**Input schema**

- `apiKey` (string)
- `twitterQuery` (string)
- `useTweetText` (boolean)
- `maxTweets` (integer)
- `normalization` (string)
- `ignoreConceptTypes` (string)
- `maxConcepts` (integer)
- `maxCategories` (integer)
- `notifyEmailAddress` (string)

### traintopicontwitter

**Environment variables**

No environment variables required

**Input schema**

- `apiKey` (string)
- `action` (string)
- `name` (string)
- `uri` (string)
- `text` (string)
- `maxConcepts` (integer)
- `maxCategories` (integer)
- `idfNormalization` (boolean)

### getarticles

**Environment variables**

No environment variables required

**Input schema**

- `apiKey` (string)
- `resultType` (string)
- `articlesPage` (integer)
- `articlesCount` (integer)
- `articlesSortBy` (string)
- `articlesSortByAsc` (boolean)
- `articleBodyLen` (integer)
- `dataType` (array)
- `query` (object)
- `keyword` (array)
- `conceptUri` (array)
- `categoryUri` (array)
- `sourceUri` (array)
- `sourceLocationUri` (array)
- `sourceGroupUri` (array)
- `authorUri` (array)
- `locationUri` (array)
- `lang` (array)
- `dateStart` (string)
- `dateEnd` (string)
- `dateMentionStart` (string)
- `dateMentionEnd` (string)
- `keywordLoc` (string)
- `keywordOper` (string)
- `conceptOper` (string)
- `categoryOper` (string)
- `ignoreKeyword` (array)
- `ignoreConceptUri` (array)
- `ignoreCategoryUri` (array)
- `ignoreSourceUri` (array)
- `ignoreSourceLocationUri` (array)
- `ignoreSourceGroupUri` (array)
- `ignoreLocationUri` (array)
- `ignoreAuthorUri` (array)
- `ignoreLang` (array)
- `ignoreKeywordLoc` (string)
- `startSourceRankPercentile` (integer)
- `endSourceRankPercentile` (integer)
- `minSentimentArticle` (integer)
- `maxSentimentArticle` (integer)
- `isDuplicateFilter` (string)
- `hasDuplicateFilter` (string)
- `eventFilter` (string)
- `includeArticleTitle` (boolean)
- `includeArticleBasicInfo` (boolean)
- `includeArticleBody` (boolean)
- `includeArticleEventUri` (boolean)
- `includeArticleSocialScore` (boolean)
- `includeArticleSentiment` (boolean)
- `includeArticleConcepts` (boolean)
- `includeArticleCategories` (boolean)
- `includeArticleLocation` (boolean)
- `includeArticleImage` (boolean)
- `includeArticleVideos` (boolean)
- `includeArticleLinks` (boolean)
- `includeArticleExtractedDates` (boolean)
- `includeArticleDuplicateList` (boolean)
- `includeArticleOriginalArticle` (boolean)
- `includeSourceTitle` (boolean)
- `includeSourceDescription` (boolean)
- `includeSourceLocation` (boolean)
- `includeSourceRanking` (boolean)
- `includeConceptLabel` (boolean)
- `includeConceptImage` (boolean)
- `includeConceptSynonyms` (boolean)
- `includeConceptTrendingScore` (boolean)
- `conceptLang` (string)
- `includeCategoryParentUri` (boolean)
- `includeLocationGeoLocation` (boolean)
- `includeLocationPopulation` (boolean)
- `includeLocationGeoNamesId` (boolean)
- `includeLocationCountryArea` (boolean)
- `includeLocationCountryContinent` (boolean)

### getarticlesfortopicpage

**Environment variables**

No environment variables required

**Input schema**

- `apiKey` (string)
- `uri` (string)
- `resultType` (string)
- `maxDaysBack` (integer)
- `onlyAfterTm` (string)
- `articlesPage` (integer)
- `articlesCount` (integer)
- `articlesSortBy` (string)
- `articlesSortByAsc` (boolean)
- `dataType` (array)
- `articleBodyLen` (integer)
- `includeArticleTitle` (boolean)
- `includeArticleBasicInfo` (boolean)
- `includeArticleBody` (boolean)
- `includeArticleEventUri` (boolean)
- `includeArticleSocialScore` (boolean)
- `includeArticleSentiment` (boolean)
- `includeArticleConcepts` (boolean)
- `includeArticleCategories` (boolean)
- `includeArticleLocation` (boolean)
- `includeArticleImage` (boolean)
- `includeArticleVideos` (boolean)
- `includeArticleLinks` (boolean)
- `includeArticleExtractedDates` (boolean)
- `includeArticleDuplicateList` (boolean)
- `includeArticleOriginalArticle` (boolean)
- `includeSourceTitle` (boolean)
- `includeSourceDescription` (boolean)
- `includeSourceLocation` (boolean)
- `includeSourceRanking` (boolean)
- `includeConceptLabel` (boolean)
- `includeConceptImage` (boolean)
- `includeConceptSynonyms` (boolean)
- `includeConceptTrendingScore` (boolean)
- `conceptLang` (string)
- `includeCategoryParentUri` (boolean)
- `includeLocationPopulation` (boolean)
- `includeLocationGeoNamesId` (boolean)
- `includeLocationCountryArea` (boolean)
- `includeLocationCountryContinent` (boolean)

### getarticle

**Environment variables**

No environment variables required

**Input schema**

- `apiKey` (string)
- `articleUri` (array)
- `resultType` (array)
- `infoArticleBodyLen` (integer)
- `includeArticleTitle` (boolean)
- `includeArticleBasicInfo` (boolean)
- `includeArticleBody` (boolean)
- `includeArticleEventUri` (boolean)
- `includeArticleSocialScore` (boolean)
- `includeArticleSentiment` (boolean)
- `includeArticleConcepts` (boolean)
- `includeArticleCategories` (boolean)
- `includeArticleLocation` (boolean)
- `includeArticleImage` (boolean)
- `includeArticleVideos` (boolean)
- `includeArticleLinks` (boolean)
- `includeArticleExtractedDates` (boolean)
- `includeArticleDuplicateList` (boolean)
- `includeArticleOriginalArticle` (boolean)
- `includeConceptLabel` (boolean)
- `includeConceptImage` (boolean)
- `includeConceptSynonyms` (boolean)
- `includeConceptTrendingScore` (boolean)
- `conceptLang` (string)
- `includeSourceTitle` (boolean)
- `includeSourceDescription` (boolean)
- `includeSourceLocation` (boolean)
- `includeSourceRanking` (boolean)
- `includeLocationPopulation` (boolean)
- `includeLocationGeoNamesId` (boolean)
- `includeLocationCountryArea` (boolean)
- `includeLocationCountryContinent` (boolean)

### minutestreamarticles

**Environment variables**

No environment variables required

**Input schema**

- `apiKey` (string)
- `recentActivityArticlesMaxArticleCount` (integer)
- `recentActivityArticles*UpdatesAfterUri` (string)
- `recentActivityArticlesUpdatesAfterMinsAgo` (integer)
- `recentActivityArticlesUpdatesAfterTm` (string)
- `articleBodyLen` (integer)
- `dataType` (array)
- `keyword` (array)
- `conceptUri` (array)
- `categoryUri` (array)
- `sourceUri` (array)
- `sourceLocationUri` (array)
- `sourceGroupUri` (array)
- `authorUri` (array)
- `locationUri` (array)
- `lang` (array)
- `keywordLoc` (string)
- `keywordOper` (string)
- `conceptOper` (string)
- `categoryOper` (string)
- `startSourceRankPercentile` (integer)
- `endSourceRankPercentile` (integer)
- `minSentimentArticle` (integer)
- `maxSentimentArticle` (integer)
- `isDuplicateFilter` (string)
- `hasDuplicateFilter` (string)
- `eventFilter` (string)

### articlemapper

**Environment variables**

No environment variables required

**Input schema**

- `apiKey` (string)
- `articleUrl` (string)
- `includeAllVersions` (boolean)
- `deep` (boolean)

### getevents

**Environment variables**

No environment variables required

**Input schema**

- `apiKey` (string)
- `resultType` (array)
- `eventsPage` (integer)
- `eventsCount` (integer)
- `eventsSortBy` (string)
- `eventsSortByAsc` (boolean)
- `query` (object)
- `keyword` (array)
- `conceptUri` (array)
- `categoryUri` (array)
- `sourceUri` (array)
- `sourceLocationUri` (array)
- `sourceGroupUri` (array)
- `authorUri` (array)
- `locationUri` (array)
- `lang` (array)
- `dateStart` (string)
- `dateEnd` (string)
- `minSentimentEvent` (integer)
- `maxSentimentEvent` (integer)
- `minArticlesInEvent` (integer)
- `maxArticlesInEvent` (integer)
- `reportingDateStart` (string)
- `reportingDateEnd` (string)
- `dateMentionStart` (string)
- `dateMentionEnd` (string)
- `keywordLoc` (string)
- `keywordOper` (string)
- `conceptOper` (string)
- `categoryOper` (string)
- `ignoreKeyword` (array)
- `ignoreConceptUri` (array)
- `ignoreCategoryUri` (array)
- `ignoreSourceUri` (array)
- `ignoreSourceLocationUri` (array)
- `ignoreSourceGroupUri` (array)
- `ignoreAuthorUri` (array)
- `ignoreLocationUri` (array)
- `ignoreLang` (array)
- `ignoreKeywordLoc` (string)
- `includeEventTitle` (boolean)
- `includeEventSummary` (boolean)
- `includeEventSocialScore` (boolean)
- `includeEventSentiment` (boolean)
- `includeEventLocation` (boolean)
- `includeEventDate` (boolean)
- `includeEventArticleCounts` (boolean)
- `includeEventConcepts` (boolean)
- `includeEventCategories` (boolean)
- `includeEventCommonDates` (boolean)
- `includeEventStories` (boolean)
- `eventImageCount` (integer)
- `includeConceptLabel` (boolean)
- `includeConceptImage` (boolean)
- `includeConceptSynonyms` (boolean)
- `conceptLang` (string)
- `includeStoryBasicStats` (boolean)
- `includeStoryTitle` (boolean)
- `includeStoryLocation` (boolean)
- `includeStoryDate` (boolean)
- `includeStoryConcepts` (boolean)
- `includeStoryCategories` (boolean)
- `includeStoryMedoidArticle` (boolean)
- `includeStoryCommonDates` (boolean)
- `storyImageCount` (integer)
- `includeCategoryParentUri` (boolean)
- `includeLocationPopulation` (boolean)
- `includeLocationGeoNamesId` (boolean)
- `includeLocationCountryArea` (boolean)
- `includeLocationCountryContinent` (boolean)

### geteventsfortopicpage

**Environment variables**

No environment variables required

**Input schema**

- `apiKey` (string)
- `uri` (string)
- `resultType` (string)
- `eventsPage` (integer)
- `eventsCount` (integer)
- `eventsSortBy` (string)
- `eventsSortByAsc` (boolean)
- `includeEventTitle` (boolean)
- `includeEventSummary` (boolean)
- `includeEventSocialScore` (boolean)
- `includeEventSentiment` (boolean)
- `includeEventLocation` (boolean)
- `includeEventDate` (boolean)
- `includeEventArticleCounts` (boolean)
- `includeEventConcepts` (boolean)
- `includeEventCategories` (boolean)
- `includeEventCommonDates` (boolean)
- `includeEventStories` (boolean)
- `eventImageCount` (integer)
- `includeConceptLabel` (boolean)
- `includeConceptImage` (boolean)
- `includeConceptSynonyms` (boolean)
- `conceptLang` (string)
- `includeStoryBasicStats` (boolean)
- `includeStoryTitle` (boolean)
- `includeStoryLocation` (boolean)
- `includeStoryDate` (boolean)
- `includeStoryConcepts` (boolean)
- `includeStoryCategories` (boolean)
- `includeStoryMedoidArticle` (boolean)
- `includeStoryCommonDates` (boolean)
- `storyImageCount` (integer)
- `includeCategoryParentUri` (boolean)
- `includeLocationPopulation` (boolean)
- `includeLocationGeoNamesId` (boolean)
- `includeLocationCountryArea` (boolean)
- `includeLocationCountryContinent` (boolean)

### getevent

**Environment variables**

No environment variables required

**Input schema**

- `apiKey` (string)
- `eventUri` (string)
- `resultType` (string)
- `articlesLang` (array)
- `articlesIncludeDuplicates` (boolean)
- `keyword` (array)
- `conceptUri` (array)
- `categoryUri` (array)
- `sourceUri` (array)
- `sourceLocationUri` (array)
- `sourceGroupUri` (array)
- `authorUri` (array)
- `locationUri` (array)
- `lang` (array)
- `dateStart` (string)
- `dateEnd` (string)
- `dateMentionStart` (string)
- `dateMentionEnd` (string)
- `keywordLoc` (string)
- `keywordOper` (string)
- `conceptOper` (string)
- `categoryOper` (string)
- `startSourceRankPercentile` (integer)
- `endSourceRankPercentile` (integer)
- `minSentimentArticle` (integer)
- `maxSentimentArticle` (integer)
- `includeEventTitle` (boolean)
- `includeEventSummary` (boolean)
- `includeEventSocialScore` (boolean)
- `includeEventSentiment` (boolean)
- `includeEventLocation` (boolean)
- `includeEventDate` (boolean)
- `includeEventArticleCounts` (boolean)
- `includeEventConcepts` (boolean)
- `includeEventCategories` (boolean)
- `includeEventCommonDates` (boolean)
- `includeEventStories` (boolean)
- `eventImageCount` (integer)
- `includeConceptLabel` (boolean)
- `includeConceptImage` (boolean)
- `includeConceptSynonyms` (boolean)
- `includeConceptTrendingScore` (boolean)
- `conceptLang` (string)
- `includeStoryBasicStats` (boolean)
- `includeStoryTitle` (boolean)
- `includeStoryLocation` (boolean)
- `includeStoryDate` (boolean)
- `includeStoryConcepts` (boolean)
- `includeStoryCategories` (boolean)
- `includeStoryMedoidArticle` (boolean)
- `includeStoryCommonDates` (boolean)
- `storyImageCount` (integer)
- `includeArticleTitle` (boolean)
- `includeArticleBasicInfo` (boolean)
- `includeArticleBody` (boolean)
- `includeArticleEventUri` (boolean)
- `includeArticleSocialScore` (boolean)
- `includeArticleSentiment` (boolean)
- `includeArticleConcepts` (boolean)
- `includeArticleCategories` (boolean)
- `includeArticleLocation` (boolean)
- `includeArticleImage` (boolean)
- `includeArticleAuthors` (boolean)
- `includeArticleVideos` (boolean)
- `includeArticleLinks` (boolean)
- `includeArticleExtractedDates` (boolean)
- `includeArticleDuplicateList` (boolean)
- `includeArticleOriginalArticle` (boolean)
- `articleBodyLen` (integer)
- `includeSourceTitle` (boolean)
- `includeSourceDescription` (boolean)
- `includeSourceLocation` (boolean)
- `includeSourceRanking` (boolean)
- `includeLocationPopulation` (boolean)
- `includeLocationGeoNamesId` (boolean)
- `includeLocationCountryArea` (boolean)
- `includeLocationCountryContinent` (boolean)

### minutestreamevents

**Environment variables**

No environment variables required

**Input schema**

- `apiKey` (string)
- `recentActivityEventsMaxEventCount` (integer)
- `recentActivityEventsUpdatesAfterMinsAgo` (integer)
- `recentActivityEventsUpdatesAfterTm` (string)
- `keyword` (array)
- `conceptUri` (array)
- `categoryUri` (array)
- `sourceUri` (array)
- `sourceLocationUri` (array)
- `sourceGroupUri` (array)
- `authorUri` (array)
- `locationUri` (array)
- `keywordLoc` (string)
- `keywordOper` (string)
- `conceptOper` (string)
- `categoryOper` (string)
- `lang` (array)
- `minArticlesInEvent` (integer)
- `maxArticlesInEvent` (integer)

### getbreakingevents

**Environment variables**

No environment variables required

**Input schema**

- `apiKey` (string)
- `breakingEventsCount` (integer)
- `breakingEventsPage` (integer)
- `breakingEventsMinBreakingScore` (number)
- `includeEventTitle` (boolean)
- `includeEventSummary` (boolean)
- `includeEventSocialScore` (boolean)
- `includeEventSentiment` (boolean)
- `includeEventLocation` (boolean)
- `includeEventDate` (boolean)
- `includeEventArticleCounts` (boolean)
- `includeEventConcepts` (boolean)
- `includeEventCategories` (boolean)
- `includeEventCommonDates` (boolean)
- `includeEventStories` (boolean)
- `eventImageCount` (integer)
- `includeConceptLabel` (boolean)
- `includeConceptImage` (boolean)
- `includeConceptSynonyms` (boolean)
- `conceptLang` (string)
- `includeStoryBasicStats` (boolean)
- `includeStoryTitle` (boolean)
- `includeStoryLocation` (boolean)
- `includeStoryDate` (boolean)
- `includeStoryConcepts` (boolean)
- `includeStoryCategories` (boolean)
- `includeStoryMedoidArticle` (boolean)
- `includeStoryCommonDates` (boolean)
- `storyImageCount` (integer)
- `includeCategoryParentUri` (boolean)
- `includeLocationPopulation` (boolean)
- `includeLocationGeoNamesId` (boolean)
- `includeLocationCountryArea` (boolean)
- `includeLocationCountryContinent` (boolean)

### suggestconceptsfast

**Environment variables**

No environment variables required

**Input schema**

- `apiKey` (string)
- `prefix` (string)

### suggestcategoriesfast

**Environment variables**

No environment variables required

**Input schema**

- `apiKey` (string)
- `prefix` (string)

### suggestsourcesfast

**Environment variables**

No environment variables required

**Input schema**

- `apiKey` (string)
- `prefix` (string)

### suggestsourcesfast

**Environment variables**

No environment variables required

**Input schema**

- `apiKey` (string)
- `prefix` (string)

### suggestlocationsfast

**Environment variables**

No environment variables required

**Input schema**

- `apiKey` (string)
- `prefix` (string)

### geteventfortext_enqueuerequest

**Environment variables**

No environment variables required

**Input schema**

- `apiKey` (string)
- `text` (string)
- `lang` (string)
- `resultType` (string)
