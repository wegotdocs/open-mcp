import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_query",
  "toolDescription": "Creates a new query.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/queries",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "ID": "ID",
      "direction": "direction",
      "namespace": "namespace",
      "query": "query",
      "result": "result",
      "resultType": "resultType",
      "time": "time",
      "timeRelative": "timeRelative"
    }
  },
  inputParamsSchema
}

export default tool