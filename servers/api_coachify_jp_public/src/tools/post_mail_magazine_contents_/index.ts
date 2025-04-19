import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_mail_magazine_contents_",
  "toolDescription": "メールマガジンコンテンツ作成",
  "baseUrl": "https://api.coachify.jp/public",
  "path": "/mail-magazine-contents/",
  "method": "post",
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