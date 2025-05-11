import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_users",
  "toolDescription": "Get users",
  "baseUrl": "https://api.napta.io/integration/v0",
  "path": "/users",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "pagination[cursor]": "pagination[cursor]",
      "pagination[limit]": "pagination[limit]",
      "id.napta_id[eq]": "id.napta_id[eq]",
      "id.napta_id[in]": "id.napta_id[in]",
      "id.external_id[eq]": "id.external_id[eq]",
      "id.external_id[in]": "id.external_id[in]"
    }
  },
  inputParamsSchema
}

export default tool