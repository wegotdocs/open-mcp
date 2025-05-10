import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "set_org_webplayer_lic_count_api_v3_sys_org_org_id_set_webplayer_",
  "toolDescription": "[super administrator] 設定組織的網頁播放器授權數量。",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/sys/org/{org_id}/set_webplayer_lic_count",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "org_id": "org_id"
    },
    "query": {
      "lic_count": "lic_count",
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool