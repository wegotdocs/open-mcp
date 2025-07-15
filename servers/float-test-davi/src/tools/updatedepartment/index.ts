import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatedepartment",
  "toolDescription": "Update a department's details, read-only fields are ignored",
  "baseUrl": "https://api.float.com/v3",
  "path": "/departments/{department_id}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "department_id": "department_id"
    }
  },
  inputParamsSchema
}

export default tool