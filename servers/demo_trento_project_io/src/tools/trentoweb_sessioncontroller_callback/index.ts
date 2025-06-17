import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "trentoweb_sessioncontroller_callback",
  "toolDescription": "Platform external IDP callback",
  "baseUrl": "https://demo.trento-project.io",
  "path": "/api/session/{provider}/callback",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "provider": "provider"
    },
    "body": {
      "code": "code",
      "session_state": "session_state"
    }
  },
  inputParamsSchema
}

export default tool