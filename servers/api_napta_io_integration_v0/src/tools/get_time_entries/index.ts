import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_time_entries",
  "toolDescription": "Get time entries",
  "baseUrl": "https://api.napta.io/integration/v0",
  "path": "/time_entries",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "pagination[cursor]": "pagination[cursor]",
      "pagination[limit]": "pagination[limit]",
      "date[ge]": "date[ge]",
      "date[le]": "date[le]",
      "user.napta_id[eq]": "user.napta_id[eq]",
      "user.napta_id[in]": "user.napta_id[in]",
      "user.external_id[eq]": "user.external_id[eq]",
      "user.external_id[in]": "user.external_id[in]",
      "workload_unit": "workload_unit"
    }
  },
  inputParamsSchema
}

export default tool