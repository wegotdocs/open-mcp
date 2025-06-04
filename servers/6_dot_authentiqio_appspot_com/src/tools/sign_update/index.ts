import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "sign_update",
  "toolDescription": "authority updates a JWT with its signature\nSee: https://github.com/skion/authentiq/wiki/JWT-Examples",
  "baseUrl": "https://6-dot-authentiqio.appspot.com",
  "path": "/scope/{job}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "job": "job"
    }
  },
  inputParamsSchema
}

export default tool