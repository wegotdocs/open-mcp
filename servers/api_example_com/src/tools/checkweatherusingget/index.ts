import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "checkweatherusingget",
  "toolDescription": "Get current weather information",
  "baseUrl": "https://api.example.com",
  "path": "/api/weather",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "location": "location"
    }
  },
  inputParamsSchema
}

export default tool