import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "appissuefieldvalueupdateresource_updateissuefields_put",
  "toolDescription": "Bulk update custom field value",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/atlassian-connect/1/migration/field",
  "method": "put",
  "security": [],
  "paramsMap": {
    "body": {
      "updateValueList": "updateValueList"
    },
    "header": {
      "Atlassian-Transfer-Id": "Atlassian-Transfer-Id"
    }
  },
  inputParamsSchema
}

export default tool