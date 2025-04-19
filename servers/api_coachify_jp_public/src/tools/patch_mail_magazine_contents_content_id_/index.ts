import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "patch_mail_magazine_contents_content_id_",
  "toolDescription": "メールマガジンコンテンツ更新",
  "baseUrl": "https://api.coachify.jp/public",
  "path": "/mail-magazine-contents/{content_id}/",
  "method": "patch",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "subject": "subject",
      "price": "price",
      "html_body": "html_body",
      "text_body": "text_body",
      "delivery_date": "delivery_date",
      "is_active": "is_active"
    }
  },
  inputParamsSchema
}

export default tool