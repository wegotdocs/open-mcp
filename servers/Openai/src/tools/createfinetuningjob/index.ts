import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createfinetuningjob",
  "toolDescription": "Creates a fine-tuning job which begins the process of creating a new model from a given dataset.\n\nResponse includes details of the enqueued job including job status and the name of the fine-tuned models once complete.\n\n[Learn more about fin",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/fine_tuning/jobs",
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
    "body": {
      "model": "model",
      "training_file": "training_file",
      "suffix": "suffix",
      "validation_file": "validation_file",
      "integrations": "integrations",
      "seed": "seed",
      "method": "method",
      "metadata": "metadata"
    }
  },
  inputParamsSchema
}

export default tool