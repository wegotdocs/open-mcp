import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dynamicmodulesresource_getmodules_get",
  "toolDescription": "Get modules",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/atlassian-connect/1/app/module/dynamic",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool