import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getfile",
  "toolDescription": "Download module release",
  "baseUrl": "https://forgeapi.puppet.com",
  "path": "/v3/files/{filename}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "filename": "filename"
    }
  },
  inputParamsSchema
}

export default tool