import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "trentoweb_sessioncontroller_refresh",
  "toolDescription": "Platform access token refresh",
  "baseUrl": "https://demo.trento-project.io",
  "path": "/api/session/refresh",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "refresh_token": "refresh_token"
    }
  },
  inputParamsSchema
}

export default tool