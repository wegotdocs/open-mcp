import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_all_appcomponents_in_app",
  "toolDescription": "Retrieve the list of app components for that application with their respective\nidentity tokens.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/apps/{id}/appcomponents",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "q": "q"
    }
  },
  inputParamsSchema
}

export default tool