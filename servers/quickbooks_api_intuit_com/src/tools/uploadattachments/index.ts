import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "uploadattachments",
  "toolDescription": "Upload-Attachments",
  "baseUrl": "https://quickbooks.api.intuit.com",
  "path": "/v3/company/{companyid}/upload",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool