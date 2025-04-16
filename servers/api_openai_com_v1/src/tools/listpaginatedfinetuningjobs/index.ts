import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listpaginatedfinetuningjobs",
  "toolDescription": "List your organization's fine-tuning jobs",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/fine_tuning/jobs",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "after": "after",
      "limit": "limit",
      "metadata": "metadata"
    }
  },
  inputParamsSchema
}

export default tool