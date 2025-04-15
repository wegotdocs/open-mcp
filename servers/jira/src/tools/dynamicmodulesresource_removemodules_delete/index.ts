import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dynamicmodulesresource_removemodules_delete",
  "toolDescription": "Remove modules",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/atlassian-connect/1/app/module/dynamic",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "query": {
      "moduleKey": "moduleKey"
    }
  },
  inputParamsSchema
}

export default tool