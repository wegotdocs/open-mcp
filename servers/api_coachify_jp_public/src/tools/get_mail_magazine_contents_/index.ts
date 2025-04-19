import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_mail_magazine_contents_",
  "toolDescription": "メールマガジンコンテンツ一覧取得",
  "baseUrl": "https://api.coachify.jp/public",
  "path": "/mail-magazine-contents/",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "page": "page",
      "page_size": "page_size"
    }
  },
  inputParamsSchema
}

export default tool