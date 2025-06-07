import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "export_aws_billing_csv_api_aws_billing_export_csv_get",
  "toolDescription": "Export Aws Billing Csv",
  "baseUrl": "https://api.example.com",
  "path": "/api/aws/billing/export-csv",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool