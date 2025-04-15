import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dynamicmodulesresource_registermodules_post",
  "toolDescription": "Register modules",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/atlassian-connect/1/app/module/dynamic",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "modules": "modules"
    }
  },
  inputParamsSchema
}

export default tool