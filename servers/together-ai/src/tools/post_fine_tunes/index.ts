import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_fine_tunes",
  "toolDescription": "Create job",
  "baseUrl": "https://api.together.xyz/v1",
  "path": "/fine-tunes",
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
      "training_file": "training_file",
      "validation_file": "validation_file",
      "model": "model",
      "n_epochs": "n_epochs",
      "n_checkpoints": "n_checkpoints",
      "n_evals": "n_evals",
      "batch_size": "batch_size",
      "learning_rate": "learning_rate",
      "lr_scheduler": "lr_scheduler",
      "warmup_ratio": "warmup_ratio",
      "max_grad_norm": "max_grad_norm",
      "weight_decay": "weight_decay",
      "suffix": "suffix",
      "wandb_api_key": "wandb_api_key",
      "wandb_base_url": "wandb_base_url",
      "wandb_project_name": "wandb_project_name",
      "wandb_name": "wandb_name",
      "train_on_inputs": "train_on_inputs",
      "training_method": "training_method",
      "training_type": "training_type",
      "from_checkpoint": "from_checkpoint"
    }
  },
  inputParamsSchema
}

export default tool