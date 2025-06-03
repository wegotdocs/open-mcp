import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getadminservicescrmfiles",
  "toolDescription": "Get CRM files",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/services/{service_id}/crm",
  "method": "get",
  "security": [
    {
      "key": "wzu",
      "value": "<mcp-env-var>WZU</mcp-env-var>",
      "in": "cookie",
      "envVarName": "WZU"
    }
  ],
  "paramsMap": {
    "path": {
      "service_id": "service_id"
    },
    "query": {
      "phase": "phase",
      "search": "search",
      "size": "size",
      "from": "from",
      "paid": "paid",
      "responsible_id": "responsible_id",
      "deal_labels": "deal_labels",
      "deal_labels_out": "deal_labels_out",
      "service_tags": "service_tags",
      "service_tags_out": "service_tags_out",
      "files": "files",
      "start_date_last_change": "start_date_last_change",
      "end_date_last_change": "end_date_last_change"
    }
  },
  inputParamsSchema
}

export default tool