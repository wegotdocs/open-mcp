import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "youtube_search_list",
  "toolDescription": "Retrieves a list of search resources",
  "baseUrl": "https://youtube.googleapis.com",
  "path": "/youtube/v3/search",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "query": {
      "part": "part",
      "channelId": "channelId",
      "channelType": "channelType",
      "eventType": "eventType",
      "forContentOwner": "forContentOwner",
      "forDeveloper": "forDeveloper",
      "forMine": "forMine",
      "location": "location",
      "locationRadius": "locationRadius",
      "maxResults": "maxResults",
      "onBehalfOfContentOwner": "onBehalfOfContentOwner",
      "order": "order",
      "pageToken": "pageToken",
      "publishedAfter": "publishedAfter",
      "publishedBefore": "publishedBefore",
      "q": "q",
      "regionCode": "regionCode",
      "relevanceLanguage": "relevanceLanguage",
      "safeSearch": "safeSearch",
      "topicId": "topicId",
      "type": "type",
      "videoCaption": "videoCaption",
      "videoCategoryId": "videoCategoryId",
      "videoDefinition": "videoDefinition",
      "videoDimension": "videoDimension",
      "videoDuration": "videoDuration",
      "videoEmbeddable": "videoEmbeddable",
      "videoLicense": "videoLicense",
      "videoPaidProductPlacement": "videoPaidProductPlacement",
      "videoSyndicated": "videoSyndicated",
      "videoType": "videoType"
    }
  },
  inputParamsSchema
}

export default tool