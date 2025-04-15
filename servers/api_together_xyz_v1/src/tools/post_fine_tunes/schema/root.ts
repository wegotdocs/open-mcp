import { z } from "zod"

export const inputParams = {
  "training_file": z.string().describe("File-ID of a training file uploaded to the Together API"),
  "validation_file": z.string().describe("File-ID of a validation file uploaded to the Together API").optional(),
  "model": z.string().describe("Name of the base model to run fine-tune job on"),
  "n_epochs": z.number().int().describe("Number of complete passes through the training dataset (higher values may improve results but increase cost and risk of overfitting)").optional(),
  "n_checkpoints": z.number().int().describe("Number of intermediate model versions saved during training for evaluation").optional(),
  "n_evals": z.number().int().describe("Number of evaluations to be run on a given validation set during training").optional(),
  "batch_size": z.number().int().describe("Number of training examples processed together (larger batches use more memory but may train faster). Defaults to \"max\". We use training optimizations like packing, so the effective batch size may be different than the value you set.").optional(),
  "learning_rate": z.number().describe("Controls how quickly the model adapts to new information (too high may cause instability, too low may slow convergence)").optional(),
  "lr_scheduler": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `lr_scheduler` to the tool, first call the tool `expandSchema` with \"/properties/lr_scheduler\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The learning rate scheduler to use. It specifies how the learning rate is adjusted during training.</property-description>").optional(),
  "warmup_ratio": z.number().describe("The percent of steps at the start of training to linearly increase the learning rate.").optional(),
  "max_grad_norm": z.number().describe("Max gradient norm to be used for gradient clipping. Set to 0 to disable.").optional(),
  "weight_decay": z.number().describe("Weight decay. Regularization parameter for the optimizer.").optional(),
  "suffix": z.string().describe("Suffix that will be added to your fine-tuned model name").optional(),
  "wandb_api_key": z.string().describe("Integration key for tracking experiments and model metrics on W&B platform").optional(),
  "wandb_base_url": z.string().describe("The base URL of a dedicated Weights & Biases instance.").optional(),
  "wandb_project_name": z.string().describe("The Weights & Biases project for your run. If not specified, will use `together` as the project name.").optional(),
  "wandb_name": z.string().describe("The Weights & Biases name for your run.").optional(),
  "train_on_inputs": z.boolean().describe("Whether to mask the user messages in conversational data or prompts in instruction data.").optional(),
  "training_method": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `training_method` to the tool, first call the tool `expandSchema` with \"/properties/training_method\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The training method to use. 'sft' for Supervised Fine-Tuning or 'dpo' for Direct Preference Optimization.</property-description>").optional(),
  "training_type": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `training_type` to the tool, first call the tool `expandSchema` with \"/properties/training_type\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "from_checkpoint": z.string().describe("The checkpoint identifier to continue training from a previous fine-tuning job. Format is `{$JOB_ID}` or `{$OUTPUT_MODEL_NAME}` or `{$JOB_ID}:{$STEP}` or `{$OUTPUT_MODEL_NAME}:{$STEP}`. The step value is optional; without it, the final checkpoint will be used.").optional()
}