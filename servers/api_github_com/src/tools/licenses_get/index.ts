import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "licenses_get",
  "toolDescription": "Get a license",
  "baseUrl": "https://api.github.com",
  "path": "/licenses/{license}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "license": "license"
    }
  },
  inputParamsSchema
}

export default tool