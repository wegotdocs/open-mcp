import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "contents_peer_feedbacks_create",
  "toolDescription": "",
  "baseUrl": "https://api.sporkbos.com",
  "path": "/api/contents/{ulid}/peer_feedbacks/",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "ulid": "ulid"
    },
    "body": {
      "content_peer_feedbacks": "content_peer_feedbacks",
      "share": "share",
      "is_annonymous": "is_annonymous"
    }
  },
  inputParamsSchema
}

export default tool