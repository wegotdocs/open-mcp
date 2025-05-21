import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "generateusernameendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/users/generate-username",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "firstName": "firstName",
      "lastName": "lastName"
    }
  },
  inputParamsSchema
}

export default tool