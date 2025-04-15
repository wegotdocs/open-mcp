import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "migrationresource_updateentitypropertiesvalue_put",
  "toolDescription": "Bulk update entity properties",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/atlassian-connect/1/migration/properties/{entityType}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "entityType": "entityType"
    },
    "header": {
      "Atlassian-Transfer-Id": "Atlassian-Transfer-Id"
    }
  },
  inputParamsSchema
}

export default tool