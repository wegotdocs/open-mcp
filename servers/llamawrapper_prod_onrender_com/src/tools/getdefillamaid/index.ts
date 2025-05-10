import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getdefillamaid",
  "toolDescription": "Get the DefiLlamaID of a protocol",
  "baseUrl": "https://llamawrapper-prod.onrender.com",
  "path": "/get_defillamaId",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "text": "text"
    }
  },
  inputParamsSchema
}

export default tool