import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getsubjectrevisions",
  "toolDescription": "Get Subject Revisions",
  "baseUrl": "https://api.bgm.tv",
  "path": "/v0/revisions/subjects",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "subject_id": "subject_id",
      "limit": "limit",
      "offset": "offset"
    }
  },
  inputParamsSchema
}

export default tool