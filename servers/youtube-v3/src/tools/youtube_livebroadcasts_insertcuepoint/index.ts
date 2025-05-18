import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "youtube_livebroadcasts_insertcuepoint",
  "toolDescription": "Insert cuepoints in a broadcast",
  "baseUrl": "https://youtube.googleapis.com",
  "path": "/youtube/v3/liveBroadcasts/cuepoint",
  "method": "post",
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
    }
  ],
  "paramsMap": {
    "query": {
      "id": "id",
      "onBehalfOfContentOwner": "onBehalfOfContentOwner",
      "onBehalfOfContentOwnerChannel": "onBehalfOfContentOwnerChannel",
      "part": "part"
    },
    "body": {
      "cueType": "cueType",
      "durationSecs": "durationSecs",
      "etag": "etag",
      "id": "b_id",
      "insertionOffsetTimeMs": "insertionOffsetTimeMs",
      "walltimeMs": "walltimeMs"
    }
  },
  inputParamsSchema
}

export default tool