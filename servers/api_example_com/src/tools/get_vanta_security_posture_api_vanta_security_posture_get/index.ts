import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_vanta_security_posture_api_vanta_security_posture_get",
  "toolDescription": "Get Vanta Security Posture",
  "baseUrl": "https://api.example.com",
  "path": "/api/vanta/security-posture",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool