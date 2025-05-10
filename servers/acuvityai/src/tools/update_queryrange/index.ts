import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_queryrange",
  "toolDescription": "Update a log given its identifier.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/queryranges/{id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "body": {
      "ID": "ID",
      "direction": "direction",
      "end": "end",
      "endRelative": "endRelative",
      "limit": "limit",
      "namespace": "namespace",
      "query": "query",
      "result": "result",
      "resultType": "resultType",
      "start": "start",
      "startRelative": "startRelative"
    }
  },
  inputParamsSchema
}

export default tool