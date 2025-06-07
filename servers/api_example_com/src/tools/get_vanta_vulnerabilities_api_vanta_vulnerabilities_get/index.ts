import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_vanta_vulnerabilities_api_vanta_vulnerabilities_get",
  "toolDescription": "Get Vanta Vulnerabilities",
  "baseUrl": "https://api.example.com",
  "path": "/api/vanta/vulnerabilities",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool