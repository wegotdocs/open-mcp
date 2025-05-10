import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_tracesearch",
  "toolDescription": "send a tracesearch request.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/tracesearches",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "ID": "ID",
      "end": "end",
      "endRelative": "endRelative",
      "namespace": "namespace",
      "query": "query",
      "result": "result",
      "spansPerSpanSet": "spansPerSpanSet",
      "start": "start",
      "startRelative": "startRelative"
    }
  },
  inputParamsSchema
}

export default tool