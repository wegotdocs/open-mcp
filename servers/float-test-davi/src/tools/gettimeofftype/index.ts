import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gettimeofftype",
  "toolDescription": "Retrieve a single time off type",
  "baseUrl": "https://api.float.com/v3",
  "path": "/timeoff-types/{timeoff_type_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "timeoff_type_id": "timeoff_type_id"
    }
  },
  inputParamsSchema
}

export default tool