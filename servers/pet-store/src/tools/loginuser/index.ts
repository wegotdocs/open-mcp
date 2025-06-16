import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "loginuser",
  "toolDescription": "Logs user into the system.",
  "baseUrl": "https://petstore3.swagger.io/api/v3/",
  "path": "/user/login",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "username": "username",
      "password": "password"
    }
  },
  inputParamsSchema
}

export default tool