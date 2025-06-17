import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "trentoweb_sessioncontroller_saml_callback",
  "toolDescription": "Platform external SAML IDP callback",
  "baseUrl": "https://demo.trento-project.io",
  "path": "/api/session/{provider}/saml_callback",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool