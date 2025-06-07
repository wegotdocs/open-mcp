import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "ping_virtualservices_api_ping_get",
  "toolDescription": "Ping Virtualservices",
  "baseUrl": "https://api.example.com",
  "path": "/api/ping",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "timeout": "timeout",
      "protocols": "protocols",
      "paths": "paths",
      "check_dns_only": "check_dns_only"
    }
  },
  inputParamsSchema
}

export default tool