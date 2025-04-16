import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_api_v3_release_push",
  "toolDescription": "",
  "baseUrl": "{protocol}://{hostpath}",
  "path": "/api/v3/release/push",
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
      "guid": "guid",
      "quality": "quality",
      "customFormats": "customFormats",
      "customFormatScore": "customFormatScore",
      "qualityWeight": "qualityWeight",
      "age": "age",
      "ageHours": "ageHours",
      "ageMinutes": "ageMinutes",
      "size": "size",
      "indexerId": "indexerId",
      "indexer": "indexer",
      "releaseGroup": "releaseGroup",
      "subGroup": "subGroup",
      "releaseHash": "releaseHash",
      "title": "title",
      "sceneSource": "sceneSource",
      "movieTitles": "movieTitles",
      "languages": "languages",
      "mappedMovieId": "mappedMovieId",
      "approved": "approved",
      "temporarilyRejected": "temporarilyRejected",
      "rejected": "rejected",
      "tmdbId": "tmdbId",
      "imdbId": "imdbId",
      "rejections": "rejections",
      "publishDate": "publishDate",
      "commentUrl": "commentUrl",
      "downloadUrl": "downloadUrl",
      "infoUrl": "infoUrl",
      "movieRequested": "movieRequested",
      "downloadAllowed": "downloadAllowed",
      "releaseWeight": "releaseWeight",
      "edition": "edition",
      "magnetUrl": "magnetUrl",
      "infoHash": "infoHash",
      "seeders": "seeders",
      "leechers": "leechers",
      "protocol": "protocol",
      "indexerFlags": "indexerFlags",
      "movieId": "movieId",
      "downloadClientId": "downloadClientId",
      "downloadClient": "downloadClient",
      "shouldOverride": "shouldOverride"
    }
  },
  inputParamsSchema
}

export default tool