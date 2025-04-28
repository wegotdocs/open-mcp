import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "add_org_default_webplayer_api_v3_sys_org_org_id_add_default_webp",
  "toolDescription": "[super administrator] 加入預設網頁播放器到組織。",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/sys/org/{org_id}/add_default_webplayer",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "org_id": "org_id"
    },
    "query": {
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool