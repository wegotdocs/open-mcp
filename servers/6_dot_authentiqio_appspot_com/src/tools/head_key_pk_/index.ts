import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "head_key_pk_",
  "toolDescription": "HEAD info on Authentiq ID",
  "baseUrl": "https://6-dot-authentiqio.appspot.com",
  "path": "/key/{PK}",
  "method": "head",
  "security": [],
  "paramsMap": {
    "path": {
      "PK": "PK"
    }
  },
  inputParamsSchema
}

export default tool