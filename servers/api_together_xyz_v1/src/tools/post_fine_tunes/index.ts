export { inputParams } from "./schema/root.js"

export const toolName = `post_fine_tunes`
export const toolDescription = `Create job`
export const baseUrl = `https://api.together.xyz/v1`
export const path = `/fine-tunes`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "training_file",
    "validation_file",
    "model",
    "n_epochs",
    "n_checkpoints",
    "n_evals",
    "batch_size",
    "learning_rate",
    "lr_scheduler",
    "warmup_ratio",
    "max_grad_norm",
    "weight_decay",
    "suffix",
    "wandb_api_key",
    "wandb_base_url",
    "wandb_project_name",
    "wandb_name",
    "train_on_inputs",
    "training_method",
    "training_type",
    "from_checkpoint"
  ]
}
export const flatMap = {}