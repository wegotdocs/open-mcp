import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "findpets",
  "toolDescription": "Returns all pets from the system that the user has access to\nNam sed condimentum est. Maecenas tempor sagittis sapien, nec rhoncus sem sagittis sit amet. Aenean at gravida augue, ac iaculis sem. Curabitur odio lorem, ornare eget elementum n",
  "baseUrl": "https://petstore.swagger.io/v2",
  "path": "/pets",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "tags": "tags",
      "limit": "limit"
    }
  },
  inputParamsSchema
}

export default tool