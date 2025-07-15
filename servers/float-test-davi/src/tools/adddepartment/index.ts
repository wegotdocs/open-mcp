import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "adddepartment",
  "toolDescription": "Add a new department",
  "baseUrl": "https://api.float.com/v3",
  "path": "/departments",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "department_id": "department_id",
      "parent_id": "parent_id",
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool