import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_webcam",
  "toolDescription": "Details einer Webcam",
  "baseUrl": "https://verkehr.autobahn.de/o/autobahn",
  "path": "/details/webcam/{webcamId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "webcamId": "webcamId"
    }
  },
  inputParamsSchema
}

export default tool