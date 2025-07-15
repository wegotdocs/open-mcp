import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletedepartment",
  "toolDescription": "Delete a department",
  "baseUrl": "https://api.float.com/v3",
  "path": "/departments/{department_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "department_id": "department_id"
    }
  },
  inputParamsSchema
}

export default tool