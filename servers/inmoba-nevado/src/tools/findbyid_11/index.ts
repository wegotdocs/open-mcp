import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "findbyid_11",
  "toolDescription": "Find enquiry by ID",
  "baseUrl": "https://api-crm.inmobalia.com/v1",
  "path": "/v1/enquiries/{enquiryId}",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "enquiryId": "enquiryId"
    }
  },
  inputParamsSchema
}

export default tool