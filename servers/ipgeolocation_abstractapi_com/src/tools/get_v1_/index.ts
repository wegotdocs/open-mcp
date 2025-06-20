import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_v1_",
  "toolDescription": "Retrieve the location of an IP address",
  "baseUrl": "https://ipgeolocation.abstractapi.com",
  "path": "/v1/",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "api_key": "api_key",
      "ip_address": "ip_address",
      "fields": "fields"
    }
  },
  inputParamsSchema
}

export default tool