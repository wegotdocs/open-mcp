import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "youtube_members_list",
  "toolDescription": "Retrieves a list of members that match the request criteria for a channel.",
  "baseUrl": "https://youtube.googleapis.com",
  "path": "/youtube/v3/members",
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
    }
  ],
  "paramsMap": {
    "query": {
      "part": "part",
      "filterByMemberChannelId": "filterByMemberChannelId",
      "hasAccessToLevel": "hasAccessToLevel",
      "maxResults": "maxResults",
      "mode": "mode",
      "pageToken": "pageToken"
    }
  },
  inputParamsSchema
}

export default tool