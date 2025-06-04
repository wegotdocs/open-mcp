import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "key_retrieve",
  "toolDescription": "Get public details of an Authentiq ID.",
  "baseUrl": "https://6-dot-authentiqio.appspot.com",
  "path": "/key/{PK}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "PK": "PK"
    }
  },
  inputParamsSchema
}

export default tool