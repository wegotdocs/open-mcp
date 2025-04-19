import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_mail_magazine_contents_content_id_",
  "toolDescription": "メールマガジンコンテンツ詳細取得",
  "baseUrl": "https://api.coachify.jp/public",
  "path": "/mail-magazine-contents/{content_id}/",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool