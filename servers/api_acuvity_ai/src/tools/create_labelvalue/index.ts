import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_labelvalue",
  "toolDescription": "Requests all values for a label.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/labelvalues",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "ID": "ID",
      "end": "end",
      "endRelative": "endRelative",
      "label": "label",
      "namespace": "namespace",
      "query": "query",
      "result": "result",
      "start": "start",
      "startRelative": "startRelative"
    }
  },
  inputParamsSchema
}

export default tool