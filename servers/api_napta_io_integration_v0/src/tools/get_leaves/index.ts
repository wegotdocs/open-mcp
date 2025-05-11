import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_leaves",
  "toolDescription": "Get leaves",
  "baseUrl": "https://api.napta.io/integration/v0",
  "path": "/leaves",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "pagination[cursor]": "pagination[cursor]",
      "pagination[limit]": "pagination[limit]",
      "start_date[ge]": "start_date[ge]",
      "start_date[le]": "start_date[le]",
      "end_date[ge]": "end_date[ge]",
      "end_date[le]": "end_date[le]",
      "user.napta_id[eq]": "user.napta_id[eq]",
      "user.napta_id[in]": "user.napta_id[in]",
      "user.external_id[eq]": "user.external_id[eq]",
      "user.external_id[in]": "user.external_id[in]"
    }
  },
  inputParamsSchema
}

export default tool