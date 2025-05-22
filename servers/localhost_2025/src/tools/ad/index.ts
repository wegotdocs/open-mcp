import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "ad",
  "toolDescription": "[查询]推荐广告",
  "baseUrl": "http://localhost:2025",
  "path": "/v1/recommend/ad",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "prompt": "prompt",
      "deviceId": "deviceId"
    }
  },
  inputParamsSchema
}

export default tool