import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getrelatedcharactersbypersonid",
  "toolDescription": "get person related characters",
  "baseUrl": "https://api.bgm.tv",
  "path": "/v0/persons/{person_id}/characters",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "person_id": "person_id"
    }
  },
  inputParamsSchema
}

export default tool