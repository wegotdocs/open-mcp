import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "submittoolouputstorun",
  "toolDescription": "When a run has the `status: \"requires_action\"` and `required_action.type` is `submit_tool_outputs`, this endpoint can be used to submit the outputs from the tool calls once they're all completed. All outputs must be submitted in a single re",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/threads/{thread_id}/runs/{run_id}/submit_tool_outputs",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "thread_id": "thread_id",
      "run_id": "run_id"
    },
    "body": {
      "tool_outputs": "tool_outputs",
      "stream": "stream"
    }
  },
  inputParamsSchema
}

export default tool