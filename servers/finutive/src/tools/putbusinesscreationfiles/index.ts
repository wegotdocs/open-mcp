import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "putbusinesscreationfiles",
  "toolDescription": "Update business creation files",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/business-creation/businesses/{business_id}/files",
  "method": "put",
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
      "business_id": "business_id"
    },
    "body": {
      "step": "step",
      "provisional_due": "provisional_due",
      "due": "due",
      "doc21233600": "doc21233600",
      "doc21233601": "doc21233601",
      "doc21275254": "doc21275254",
      "doc21275255": "doc21275255",
      "doc21275256": "doc21275256",
      "doc21275643": "doc21275643",
      "cif": "cif",
      "document036": "document036",
      "constitution": "constitution"
    }
  },
  inputParamsSchema
}

export default tool