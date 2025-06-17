import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_subscriptions_id_lead_source",
  "toolDescription": "Create a Lead Source for a Subscription",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/subscriptions/{id}/lead-source",
  "method": "put",
  "security": [
    {
      "key": "REB-APIKEY",
      "value": "<mcp-env-var>REB_APIKEY</mcp-env-var>",
      "in": "header",
      "envVarName": "REB_APIKEY"
    }
  ],
  "paramsMap": {
    "body": {
      "id": "id",
      "medium": "medium",
      "source": "source",
      "campaign": "campaign",
      "term": "term",
      "content": "content",
      "affiliate": "affiliate",
      "subAffiliate": "subAffiliate",
      "salesAgent": "salesAgent",
      "clickId": "clickId",
      "path": "path",
      "ipAddress": "ipAddress",
      "currency": "currency",
      "amount": "amount",
      "createdTime": "createdTime",
      "updatedTime": "updatedTime",
      "_links": "_links"
    }
  },
  inputParamsSchema
}

export default tool