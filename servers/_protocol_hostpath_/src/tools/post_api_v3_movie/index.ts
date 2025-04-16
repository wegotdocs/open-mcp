import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_api_v3_movie",
  "toolDescription": "",
  "baseUrl": "{protocol}://{hostpath}",
  "path": "/api/v3/movie",
  "method": "post",
  "security": [
    {
      "key": "X-Api-Key",
      "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_API_KEY"
    },
    {
      "key": "apikey",
      "value": "<mcp-env-var>APIKEY</mcp-env-var>",
      "in": "query",
      "envVarName": "APIKEY"
    }
  ],
  "paramsMap": {
    "body": {
      "id": "id",
      "title": "title",
      "originalTitle": "originalTitle",
      "originalLanguage": "originalLanguage",
      "alternateTitles": "alternateTitles",
      "secondaryYear": "secondaryYear",
      "secondaryYearSourceId": "secondaryYearSourceId",
      "sortTitle": "sortTitle",
      "sizeOnDisk": "sizeOnDisk",
      "status": "status",
      "overview": "overview",
      "inCinemas": "inCinemas",
      "physicalRelease": "physicalRelease",
      "digitalRelease": "digitalRelease",
      "releaseDate": "releaseDate",
      "physicalReleaseNote": "physicalReleaseNote",
      "images": "images",
      "website": "website",
      "remotePoster": "remotePoster",
      "year": "year",
      "youTubeTrailerId": "youTubeTrailerId",
      "studio": "studio",
      "path": "path",
      "qualityProfileId": "qualityProfileId",
      "hasFile": "hasFile",
      "movieFileId": "movieFileId",
      "monitored": "monitored",
      "minimumAvailability": "minimumAvailability",
      "isAvailable": "isAvailable",
      "folderName": "folderName",
      "runtime": "runtime",
      "cleanTitle": "cleanTitle",
      "imdbId": "imdbId",
      "tmdbId": "tmdbId",
      "titleSlug": "titleSlug",
      "rootFolderPath": "rootFolderPath",
      "folder": "folder",
      "certification": "certification",
      "genres": "genres",
      "tags": "tags",
      "added": "added",
      "addOptions": "addOptions",
      "ratings": "ratings",
      "movieFile": "movieFile",
      "collection": "collection",
      "popularity": "popularity",
      "lastSearchTime": "lastSearchTime",
      "statistics": "statistics"
    }
  },
  inputParamsSchema
}

export default tool