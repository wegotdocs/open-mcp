import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "sms_send",
  "toolDescription": "SMS -- Send",
  "baseUrl": "https://dialpad.com",
  "path": "/api/v2/sms",
  "method": "post",
  "security": [
    {
      "key": "apikey",
      "value": "<mcp-env-var>APIKEY</mcp-env-var>",
      "in": "query",
      "envVarName": "APIKEY"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "channel_hashtag": "channel_hashtag",
      "from_number": "from_number",
      "infer_country_code": "infer_country_code",
      "media": "media",
      "sender_group_id": "sender_group_id",
      "sender_group_type": "sender_group_type",
      "text": "text",
      "to_numbers": "to_numbers",
      "user_id": "user_id"
    }
  },
  inputParamsSchema
}

export default tool