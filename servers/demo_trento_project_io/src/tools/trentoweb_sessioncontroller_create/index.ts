import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "trentoweb_sessioncontroller_create",
  "toolDescription": "Platform login",
  "baseUrl": "https://demo.trento-project.io",
  "path": "/api/session",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "password": "password",
      "totp_code": "totp_code",
      "username": "username"
    }
  },
  inputParamsSchema
}

export default tool