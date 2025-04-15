import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "parameters_v1beta1_workspace_removedirectory",
  "toolDescription": "",
  "baseUrl": "https://dataform.googleapis.com",
  "path": "/v1beta1/{workspace}:removeDirectory",
  "method": "parameters",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool