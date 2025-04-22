# @open-mcp/together-ai

## Installing

First set the environment variables as shell variables:

```bash
API_KEY='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add together-ai \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add together-ai \
  .cursor/mcp.json \
  --API_KEY=$API_KEY
```

### Other

```bash
npx @open-mcp/config add together-ai \
  /path/to/client/config.json \
  --API_KEY=$API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "together-ai": {
      "command": "npx",
      "args": ["-y", "@open-mcp/together-ai"],
      "env": {"API_KEY":"..."}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `API_KEY`

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/together-ai
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/together-ai`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

```ts
{
  toolName: z.string(),
  jsonPointers: z.array(z.string().startsWith("/").describe("The pointer to the JSON schema object which needs expanding")).describe("A list of JSON pointers"),
}
```

### chat_completions

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "messages": z.array(z.object({ "role": z.enum(["system","user","assistant","tool"]).describe("The role of the messages author. Choice between: system, user, or assistant."), "content": z.string().describe("A plain text message.").describe("The content of the message, which can either be a simple string or a structured format.") })).describe("A list of messages comprising the conversation so far."),
  "model": z.union([z.enum(["Qwen/Qwen2.5-72B-Instruct-Turbo","Qwen/Qwen2.5-7B-Instruct-Turbo","meta-llama/Meta-Llama-3.1-405B-Instruct-Turbo","meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo","meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo"]), z.string()]).describe("The name of the model to query.<br> <br> [See all of Together AI's chat models](https://docs.together.ai/docs/serverless-models#chat-models)\n"),
  "max_tokens": z.number().int().describe("The maximum number of tokens to generate.").optional(),
  "stop": z.array(z.string()).describe("A list of string sequences that will truncate (stop) inference text output. For example, \"</s>\" will stop generation as soon as the model generates the given token.").optional(),
  "temperature": z.number().describe("A decimal number from 0-1 that determines the degree of randomness in the response. A temperature less than 1 favors more correctness and is appropriate for question answering or summarization. A value closer to 1 introduces more randomness in the output.").optional(),
  "top_p": z.number().describe("A percentage (also called the nucleus parameter) that's used to dynamically adjust the number of choices for each predicted token based on the cumulative probabilities. It specifies a probability threshold below which all less likely tokens are filtered out. This technique helps maintain diversity and generate more fluent and natural-sounding text.").optional(),
  "top_k": z.number().int().describe("An integer that's used to limit the number of choices for the next predicted word or token. It specifies the maximum number of tokens to consider at each step, based on their probability of occurrence. This technique helps to speed up the generation process and can improve the quality of the generated text by focusing on the most likely options.").optional(),
  "context_length_exceeded_behavior": z.enum(["truncate","error"]).describe("Defined the behavior of the API when max_tokens exceed the maximum context length of the model. When set to 'error', API will return 400 with appropriate error message. When set to 'truncate', override the max_tokens with maximum context length of the model.").optional(),
  "repetition_penalty": z.number().describe("A number that controls the diversity of generated text by reducing the likelihood of repeated sequences. Higher values decrease repetition.").optional(),
  "stream": z.boolean().describe("If true, stream tokens as Server-Sent Events as the model generates them instead of waiting for the full model response. The stream terminates with \`data: [DONE]\`. If false, return a single JSON object containing the results.").optional(),
  "logprobs": z.number().int().gte(0).lte(1).describe("Integer (0 or 1) that controls whether log probabilities of generated tokens are returned. Log probabilities help assess model confidence in token predictions.").optional(),
  "echo": z.boolean().describe("If true, the response will contain the prompt. Can be used with \`logprobs\` to return prompt logprobs.").optional(),
  "n": z.number().int().gte(1).lte(128).describe("The number of completions to generate for each prompt.").optional(),
  "min_p": z.number().describe("A number between 0 and 1 that can be used as an alternative to top_p and top-k.").optional(),
  "presence_penalty": z.number().describe("A number between -2.0 and 2.0 where a positive value increases the likelihood of a model talking about new topics.").optional(),
  "frequency_penalty": z.number().describe("A number between -2.0 and 2.0 where a positive value decreases the likelihood of repeating tokens that have already been mentioned.").optional(),
  "logit_bias": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAdjusts the likelihood of specific tokens appearing in the generated output.").optional(),
  "seed": z.number().int().describe("Seed value for reproducibility.").optional(),
  "function_call": z.enum(["none","auto"]).optional(),
  "response_format": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAn object specifying the format that the model must output.").optional(),
  "tools": z.array(z.object({ "type": z.string().optional(), "function": z.object({ "description": z.string().optional(), "name": z.string().optional(), "parameters": z.record(z.any()).describe("A map of parameter names to their values.").optional() }).optional() })).describe("A list of tools the model may call. Currently, only functions are supported as a tool. Use this to provide a list of functions the model may generate JSON inputs for.").optional(),
  "tool_choice": z.string().describe("Controls which (if any) function is called by the model. By default uses \`auto\`, which lets the model pick between generating a message or calling a function.").optional(),
  "safety_model": z.string().describe("The name of the moderation model used to validate tokens. Choose from the available moderation models found [here](https://docs.together.ai/docs/inference-models#moderation-models).").optional()
}
```

### completions

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "prompt": z.string().describe("A string providing context for the model to complete."),
  "model": z.union([z.enum(["meta-llama/Llama-2-70b-hf","mistralai/Mistral-7B-v0.1","mistralai/Mixtral-8x7B-v0.1","Meta-Llama/Llama-Guard-7b"]), z.string()]).describe("The name of the model to query.<br> <br> [See all of Together AI's chat models](https://docs.together.ai/docs/serverless-models#chat-models)\n"),
  "max_tokens": z.number().int().describe("The maximum number of tokens to generate.").optional(),
  "stop": z.array(z.string()).describe("A list of string sequences that will truncate (stop) inference text output. For example, \"</s>\" will stop generation as soon as the model generates the given token.").optional(),
  "temperature": z.number().describe("A decimal number from 0-1 that determines the degree of randomness in the response. A temperature less than 1 favors more correctness and is appropriate for question answering or summarization. A value closer to 1 introduces more randomness in the output.").optional(),
  "top_p": z.number().describe("A percentage (also called the nucleus parameter) that's used to dynamically adjust the number of choices for each predicted token based on the cumulative probabilities. It specifies a probability threshold below which all less likely tokens are filtered out. This technique helps maintain diversity and generate more fluent and natural-sounding text.").optional(),
  "top_k": z.number().int().describe("An integer that's used to limit the number of choices for the next predicted word or token. It specifies the maximum number of tokens to consider at each step, based on their probability of occurrence. This technique helps to speed up the generation process and can improve the quality of the generated text by focusing on the most likely options.").optional(),
  "repetition_penalty": z.number().describe("A number that controls the diversity of generated text by reducing the likelihood of repeated sequences. Higher values decrease repetition.").optional(),
  "stream": z.boolean().describe("If true, stream tokens as Server-Sent Events as the model generates them instead of waiting for the full model response. The stream terminates with \`data: [DONE]\`. If false, return a single JSON object containing the results.").optional(),
  "logprobs": z.number().int().gte(0).lte(1).describe("Integer (0 or 1) that controls whether log probabilities of generated tokens are returned. Log probabilities help assess model confidence in token predictions.").optional(),
  "echo": z.boolean().describe("If true, the response will contain the prompt. Can be used with \`logprobs\` to return prompt logprobs.").optional(),
  "n": z.number().int().gte(1).lte(128).describe("The number of completions to generate for each prompt.").optional(),
  "safety_model": z.union([z.literal("Meta-Llama/Llama-Guard-7b"), z.string()]).describe("The name of the moderation model used to validate tokens. Choose from the available moderation models found [here](https://docs.together.ai/docs/inference-models#moderation-models).").optional(),
  "min_p": z.number().describe("A number between 0 and 1 that can be used as an alternative to top-p and top-k.").optional(),
  "presence_penalty": z.number().describe("A number between -2.0 and 2.0 where a positive value increases the likelihood of a model talking about new topics.").optional(),
  "frequency_penalty": z.number().describe("A number between -2.0 and 2.0 where a positive value decreases the likelihood of repeating tokens that have already been mentioned.").optional(),
  "logit_bias": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nAdjusts the likelihood of specific tokens appearing in the generated output.").optional(),
  "seed": z.number().int().describe("Seed value for reproducibility.").optional()
}
```

### embeddings

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "model": z.union([z.enum(["WhereIsAI/UAE-Large-V1","BAAI/bge-large-en-v1.5","BAAI/bge-base-en-v1.5","togethercomputer/m2-bert-80M-8k-retrieval"]), z.string()]).describe("The name of the embedding model to use.<br> <br> [See all of Together AI's embedding models](https://docs.together.ai/docs/serverless-models#embedding-models)\n"),
  "input": z.string().describe("A string providing the text for the model to embed.")
}
```

### models

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### uploadmodel

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "model_name": z.string().describe("The name to give to your uploaded model"),
  "model_source": z.string().describe("The source location of the model (Hugging Face repo or S3 path)"),
  "hf_token": z.string().describe("Hugging Face token (if uploading from Hugging Face)").optional(),
  "description": z.string().describe("A description of your model").optional()
}
```

### getjob

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "jobId": z.string().describe("The ID of the job to retrieve")
}
```

### listjobs

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### post_images_generations

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "prompt": z.string().describe("A description of the desired images. Maximum length varies by model."),
  "model": z.union([z.enum(["black-forest-labs/FLUX.1-schnell-Free","black-forest-labs/FLUX.1-schnell","black-forest-labs/FLUX.1.1-pro"]), z.string()]).describe("The model to use for image generation.<br> <br> [See all of Together AI's image models](https://docs.together.ai/docs/serverless-models#image-models)\n"),
  "steps": z.number().int().describe("Number of generation steps.").optional(),
  "image_url": z.string().describe("URL of an image to use for image models that support it.").optional(),
  "seed": z.number().int().describe("Seed used for generation. Can be used to reproduce image generations.").optional(),
  "n": z.number().int().describe("Number of image results to generate.").optional(),
  "height": z.number().int().describe("Height of the image to generate in number of pixels.").optional(),
  "width": z.number().int().describe("Width of the image to generate in number of pixels.").optional(),
  "negative_prompt": z.string().describe("The prompt or prompts not to guide the image generation.").optional(),
  "response_format": z.enum(["base64","url"]).describe("Format of the image response. Can be either a base64 string or a URL.").optional(),
  "guidance": z.number().describe("Adjusts the alignment of the generated image with the input prompt. Higher values (e.g., 8-10) make the output more faithful to the prompt, while lower values (e.g., 1-5) encourage more creative freedom.").optional(),
  "output_format": z.enum(["jpeg","png"]).describe("The format of the image response. Can be either be \`jpeg\` or \`png\`. Defaults to \`jpeg\`.").optional(),
  "image_loras": z.array(z.object({ "path": z.string().describe("The URL of the LoRA to apply (e.g. https://huggingface.co/strangerzonehf/Flux-Midjourney-Mix2-LoRA)."), "scale": z.number().describe("The strength of the LoRA's influence. Most LoRA's recommend a value of 1.") })).describe("An array of objects that define LoRAs (Low-Rank Adaptations) to influence the generated image.").optional()
}
```

### get_files

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### get_files_id_

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "id": z.string()
}
```

### delete_files_id_

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "id": z.string()
}
```

### get_files_id_content

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "id": z.string()
}
```

### post_fine_tunes

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "training_file": z.string().describe("File-ID of a training file uploaded to the Together API"),
  "validation_file": z.string().describe("File-ID of a validation file uploaded to the Together API").optional(),
  "model": z.string().describe("Name of the base model to run fine-tune job on"),
  "n_epochs": z.number().int().describe("Number of complete passes through the training dataset (higher values may improve results but increase cost and risk of overfitting)").optional(),
  "n_checkpoints": z.number().int().describe("Number of intermediate model versions saved during training for evaluation").optional(),
  "n_evals": z.number().int().describe("Number of evaluations to be run on a given validation set during training").optional(),
  "batch_size": z.number().int().describe("Number of training examples processed together (larger batches use more memory but may train faster). Defaults to \"max\". We use training optimizations like packing, so the effective batch size may be different than the value you set.").optional(),
  "learning_rate": z.number().describe("Controls how quickly the model adapts to new information (too high may cause instability, too low may slow convergence)").optional(),
  "lr_scheduler": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe learning rate scheduler to use. It specifies how the learning rate is adjusted during training.").optional(),
  "warmup_ratio": z.number().describe("The percent of steps at the start of training to linearly increase the learning rate.").optional(),
  "max_grad_norm": z.number().describe("Max gradient norm to be used for gradient clipping. Set to 0 to disable.").optional(),
  "weight_decay": z.number().describe("Weight decay. Regularization parameter for the optimizer.").optional(),
  "suffix": z.string().describe("Suffix that will be added to your fine-tuned model name").optional(),
  "wandb_api_key": z.string().describe("Integration key for tracking experiments and model metrics on W&B platform").optional(),
  "wandb_base_url": z.string().describe("The base URL of a dedicated Weights & Biases instance.").optional(),
  "wandb_project_name": z.string().describe("The Weights & Biases project for your run. If not specified, will use \`together\` as the project name.").optional(),
  "wandb_name": z.string().describe("The Weights & Biases name for your run.").optional(),
  "train_on_inputs": z.boolean().describe("Whether to mask the user messages in conversational data or prompts in instruction data.").optional(),
  "training_method": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe training method to use. 'sft' for Supervised Fine-Tuning or 'dpo' for Direct Preference Optimization.").optional(),
  "training_type": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "from_checkpoint": z.string().describe("The checkpoint identifier to continue training from a previous fine-tuning job. Format is \`{$JOB_ID}\` or \`{$OUTPUT_MODEL_NAME}\` or \`{$JOB_ID}:{$STEP}\` or \`{$OUTPUT_MODEL_NAME}:{$STEP}\`. The step value is optional; without it, the final checkpoint will be used.").optional()
}
```

### get_fine_tunes

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### get_fine_tunes_id_

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "id": z.string()
}
```

### get_fine_tunes_id_events

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "id": z.string()
}
```

### get_finetune_download

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "ft_id": z.string().describe("Fine-tune ID to download. A string that starts with \`ft-\`."),
  "checkpoint_step": z.number().int().describe("Specifies step number for checkpoint to download. Ignores \`checkpoint\` value if set.").optional(),
  "checkpoint": z.enum(["merged","adapter"]).describe("Specifies checkpoint type to download - \`merged\` vs \`adapter\`. This field is required if the checkpoint_step is not set.").optional(),
  "output": z.string().describe("Specifies output file name for downloaded model. Defaults to \`$PWD/{model_name}.{extension}\`.").optional()
}
```

### post_fine_tunes_id_cancel

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "id": z.string().describe("Fine-tune ID to cancel. A string that starts with \`ft-\`.")
}
```

### rerank

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "model": z.union([z.literal("Salesforce/Llama-Rank-v1"), z.string()]).describe("The model to be used for the rerank request.<br> <br> [See all of Together AI's rerank models](https://docs.together.ai/docs/serverless-models#rerank-models)\n"),
  "query": z.string().describe("The search query to be used for ranking."),
  "documents": z.array(z.record(z.any())).describe("List of documents, which can be either strings or objects."),
  "top_n": z.number().int().describe("The number of top results to return.").optional(),
  "return_documents": z.boolean().describe("Whether to return supplied documents with the response.").optional(),
  "rank_fields": z.array(z.string()).describe("List of keys in the JSON Object document to rank by. Defaults to use all supplied keys for ranking.").optional()
}
```

### audio_speech

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "model": z.union([z.literal("cartesia/sonic"), z.string()]).describe("The name of the model to query.<br> <br> [See all of Together AI's chat models](https://docs.together.ai/docs/serverless-models#audio-models)\n"),
  "input": z.string().describe("Input text to generate the audio for"),
  "voice": z.union([z.enum(["laidback woman","polite man","storyteller lady","friendly sidekick"]), z.string()]).describe("The voice to use for generating the audio. [View all supported voices here](https://docs.together.ai/docs/text-to-speech#voices-available)."),
  "response_format": z.enum(["mp3","wav","raw"]).describe("The format of audio output").optional(),
  "language": z.enum(["en","de","fr","es","hi","it","ja","ko","nl","pl","pt","ru","sv","tr","zh"]).describe("Language of input text").optional(),
  "response_encoding": z.enum(["pcm_f32le","pcm_s16le","pcm_mulaw","pcm_alaw"]).describe("Audio encoding of response").optional(),
  "sample_rate": z.number().describe("Sampling rate to use for the output audio").optional(),
  "stream": z.boolean().describe("If true, output is streamed for several characters at a time instead of waiting for the full response. The stream terminates with \`data: [DONE]\`. If false, return the encoded audio as octet stream").optional()
}
```

### listendpoints

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "type": z.enum(["dedicated","serverless"]).describe("Filter endpoints by type").optional()
}
```

### createendpoint

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "display_name": z.string().describe("A human-readable name for the endpoint").optional(),
  "model": z.string().describe("The model to deploy on this endpoint"),
  "hardware": z.string().describe("The hardware configuration to use for this endpoint"),
  "autoscaling": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nConfiguration for automatic scaling of the endpoint"),
  "disable_prompt_cache": z.boolean().describe("Whether to disable the prompt cache for this endpoint").optional(),
  "disable_speculative_decoding": z.boolean().describe("Whether to disable speculative decoding for this endpoint").optional(),
  "state": z.enum(["STARTED","STOPPED"]).describe("The desired state of the endpoint").optional(),
  "inactive_timeout": z.number().int().nullable().describe("The number of minutes of inactivity after which the endpoint will be automatically stopped. Set to null, omit or set to 0 to disable automatic timeout.").optional()
}
```

### getendpoint

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "endpointId": z.string().describe("The ID of the endpoint to retrieve")
}
```

### updateendpoint

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "endpointId": z.string().describe("The ID of the endpoint to update"),
  "display_name": z.string().describe("A human-readable name for the endpoint").optional(),
  "state": z.enum(["STARTED","STOPPED"]).describe("The desired state of the endpoint").optional(),
  "autoscaling": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nNew autoscaling configuration for the endpoint").optional(),
  "inactive_timeout": z.number().int().nullable().describe("The number of minutes of inactivity after which the endpoint will be automatically stopped. Set to 0 to disable automatic timeout.").optional()
}
```

### deleteendpoint

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "endpointId": z.string().describe("The ID of the endpoint to delete")
}
```

### listhardware

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "model": z.string().describe("Filter hardware configurations by model compatibility. When provided,  the response includes availability status for each compatible configuration.\n").optional()
}
```

### tci_execute

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "code": z.string().describe("Code snippet to execute. ").optional(),
  "language": z.literal("python").describe("Programming language for the code to execute. Currently only supports Python, but more will be added.").optional(),
  "session_id": z.string().describe("Identifier of the current session. Used to make follow-up calls. Requests will return an error if the session does not belong to the caller or has expired.").optional()
}
```

### sessions_list

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```
