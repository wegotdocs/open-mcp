import { z } from "zod"

export const toolName = `createfinetuningjob`
export const toolDescription = `Creates a fine-tuning job which begins the process of creating a new model from a given dataset.

Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.

[Learn more about fin`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/fine_tuning/jobs`
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

export const inputParams = z.object({ "body": z.object({ "model": z.union([z.string(), z.enum(["babbage-002","davinci-002","gpt-3.5-turbo","gpt-4o-mini"])]).describe("The name of the model to fine-tune. You can select one of the\n[supported models](/docs/guides/fine-tuning#which-models-can-be-fine-tuned).\n"), "training_file": z.string().describe("The ID of an uploaded file that contains training data.\n\nSee [upload file](/docs/api-reference/files/create) for how to upload a file.\n\nYour dataset must be formatted as a JSONL file. Additionally, you must upload your file with the purpose `fine-tune`.\n\nThe contents of the file should differ depending on if the model uses the [chat](/docs/api-reference/fine-tuning/chat-input), [completions](/docs/api-reference/fine-tuning/completions-input) format, or if the fine-tuning method uses the [preference](/docs/api-reference/fine-tuning/preference-input) format.\n\nSee the [fine-tuning guide](/docs/guides/fine-tuning) for more details.\n"), "suffix": z.string().min(1).max(64).nullable().describe("A string of up to 64 characters that will be added to your fine-tuned model name.\n\nFor example, a `suffix` of \"custom-model-name\" would produce a model name like `ft:gpt-4o-mini:openai:custom-model-name:7p4lURel`.\n"), "validation_file": z.string().nullable().describe("The ID of an uploaded file that contains validation data.\n\nIf you provide this file, the data is used to generate validation\nmetrics periodically during fine-tuning. These metrics can be viewed in\nthe fine-tuning results file.\nThe same data should not be present in both train and validation files.\n\nYour dataset must be formatted as a JSONL file. You must upload your file with the purpose `fine-tune`.\n\nSee the [fine-tuning guide](/docs/guides/fine-tuning) for more details.\n").optional(), "integrations": z.array(z.object({ "type": z.literal("wandb").describe("The type of integration to enable. Currently, only \"wandb\" (Weights and Biases) is supported.\n"), "wandb": z.object({ "project": z.string().describe("The name of the project that the new run will be created under.\n"), "name": z.string().nullable().describe("A display name to set for the run. If not set, we will use the Job ID as the name.\n").optional(), "entity": z.string().nullable().describe("The entity to use for the run. This allows you to set the team or username of the WandB user that you would\nlike associated with the run. If not set, the default entity for the registered WandB API key is used.\n").optional(), "tags": z.array(z.string()).describe("A list of tags to be attached to the newly created run. These tags are passed through directly to WandB. Some\ndefault tags are generated by OpenAI: \"openai/finetune\", \"openai/{base-model}\", \"openai/{ftjob-abcdef}\".\n").optional() }).describe("The settings for your integration with Weights and Biases. This payload specifies the project that\nmetrics will be sent to. Optionally, you can set an explicit display name for your run, add tags\nto your run, and set a default entity (team, username, etc) to be associated with your run.\n") })).nullable().describe("A list of integrations to enable for your fine-tuning job.").optional(), "seed": z.number().int().gte(0).lte(2147483647).nullable().describe("The seed controls the reproducibility of the job. Passing in the same seed and job parameters should produce the same results, but may differ in rare cases.\nIf a seed is not specified, one will be generated for you.\n").optional(), "method": z.object({ "type": z.enum(["supervised","dpo"]).describe("The type of method. Is either `supervised` or `dpo`.").optional(), "supervised": z.object({ "hyperparameters": z.object({ "batch_size": z.literal("auto").describe("Number of examples in each batch. A larger batch size means that model parameters are updated less frequently, but with lower variance.\n"), "learning_rate_multiplier": z.literal("auto").describe("Scaling factor for the learning rate. A smaller learning rate may be useful to avoid overfitting.\n"), "n_epochs": z.literal("auto").describe("The number of epochs to train the model for. An epoch refers to one full cycle through the training dataset.\n") }).describe("The hyperparameters used for the fine-tuning job.").optional() }).describe("Configuration for the supervised fine-tuning method.").optional(), "dpo": z.object({ "hyperparameters": z.object({ "beta": z.literal("auto").describe("The beta value for the DPO method. A higher beta value will increase the weight of the penalty between the policy and reference model.\n"), "batch_size": z.literal("auto").describe("Number of examples in each batch. A larger batch size means that model parameters are updated less frequently, but with lower variance.\n"), "learning_rate_multiplier": z.literal("auto").describe("Scaling factor for the learning rate. A smaller learning rate may be useful to avoid overfitting.\n"), "n_epochs": z.literal("auto").describe("The number of epochs to train the model for. An epoch refers to one full cycle through the training dataset.\n") }).describe("The hyperparameters used for the fine-tuning job.").optional() }).describe("Configuration for the DPO fine-tuning method.").optional() }).describe("The method used for fine-tuning.").optional(), "metadata": z.record(z.string()).nullable().describe("Set of 16 key-value pairs that can be attached to an object. This can be\nuseful for storing additional information about the object in a structured\nformat, and querying for objects via API or the dashboard. \n\nKeys are strings with a maximum length of 64 characters. Values are strings\nwith a maximum length of 512 characters.\n").optional() }).optional() }).shape