import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createresponse",
  "toolDescription": "Creates a model response. Provide [text](/docs/guides/text) or\n[image](/docs/guides/images) inputs to generate [text](/docs/guides/text)\nor [JSON](/docs/guides/structured-outputs) outputs. Have the model call\nyour own [custom code](/docs/gu",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/responses",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool