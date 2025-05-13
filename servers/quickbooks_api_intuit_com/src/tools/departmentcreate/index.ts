import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "departmentcreate",
  "toolDescription": "Department-Create",
  "baseUrl": "https://quickbooks.api.intuit.com",
  "path": "/v3/company/{companyid}/department",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "Active": "Active",
      "FullyQualifiedName": "FullyQualifiedName",
      "Id": "Id",
      "Name": "Name",
      "SubDepartment": "SubDepartment",
      "SyncToken": "SyncToken",
      "domain": "domain",
      "sparse": "sparse"
    }
  },
  inputParamsSchema
}

export default tool