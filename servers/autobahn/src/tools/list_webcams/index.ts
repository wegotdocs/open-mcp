import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_webcams",
  "toolDescription": "Liste verfügbarer Webcams",
  "baseUrl": "https://verkehr.autobahn.de/o/autobahn",
  "path": "/{roadId}/services/webcam",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "roadId": "roadId"
    }
  },
  inputParamsSchema
}

export default tool