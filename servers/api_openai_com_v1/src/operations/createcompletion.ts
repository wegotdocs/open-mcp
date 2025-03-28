import { z } from "zod"

export const toolName = `createcompletion`
export const toolDescription = `Creates a completion for the provided prompt and parameters.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/completions`
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

export const inputParams = z.object({ "body": z.object({ "model": z.union([z.string(), z.enum(["gpt-3.5-turbo-instruct","davinci-002","babbage-002"])]).describe("ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models) for descriptions of them.\n"), "prompt": z.string().nullable().describe("The prompt(s) to generate completions for, encoded as a string, array of strings, array of tokens, or array of token arrays.\n\nNote that <|endoftext|> is the document separator that the model sees during training, so if a prompt is not specified the model will generate as if from the beginning of a new document.\n"), "best_of": z.number().int().gte(0).lte(20).nullable().describe("Generates `best_of` completions server-side and returns the \"best\" (the one with the highest log probability per token). Results cannot be streamed.\n\nWhen used with `n`, `best_of` controls the number of candidate completions and `n` specifies how many to return – `best_of` must be greater than `n`.\n\n**Note:** Because this parameter generates many completions, it can quickly consume your token quota. Use carefully and ensure that you have reasonable settings for `max_tokens` and `stop`.\n"), "echo": z.boolean().nullable().describe("Echo back the prompt in addition to the completion\n"), "frequency_penalty": z.number().gte(-2).lte(2).nullable().describe("Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.\n\n[See more information about frequency and presence penalties.](/docs/guides/text-generation)\n"), "logit_bias": z.record(z.number().int()).nullable().describe("Modify the likelihood of specified tokens appearing in the completion.\n\nAccepts a JSON object that maps tokens (specified by their token ID in the GPT tokenizer) to an associated bias value from -100 to 100. You can use this [tokenizer tool](/tokenizer?view=bpe) to convert text to token IDs. Mathematically, the bias is added to the logits generated by the model prior to sampling. The exact effect will vary per model, but values between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100 should result in a ban or exclusive selection of the relevant token.\n\nAs an example, you can pass `{\"50256\": -100}` to prevent the <|endoftext|> token from being generated.\n"), "logprobs": z.number().int().gte(0).lte(5).nullable().describe("Include the log probabilities on the `logprobs` most likely output tokens, as well the chosen tokens. For example, if `logprobs` is 5, the API will return a list of the 5 most likely tokens. The API will always return the `logprob` of the sampled token, so there may be up to `logprobs+1` elements in the response.\n\nThe maximum value for `logprobs` is 5.\n"), "max_tokens": z.number().int().gte(0).nullable().describe("The maximum number of [tokens](/tokenizer) that can be generated in the completion.\n\nThe token count of your prompt plus `max_tokens` cannot exceed the model's context length. [Example Python code](https://cookbook.openai.com/examples/how_to_count_tokens_with_tiktoken) for counting tokens.\n"), "n": z.number().int().gte(1).lte(128).nullable().describe("How many completions to generate for each prompt.\n\n**Note:** Because this parameter generates many completions, it can quickly consume your token quota. Use carefully and ensure that you have reasonable settings for `max_tokens` and `stop`.\n"), "presence_penalty": z.number().gte(-2).lte(2).nullable().describe("Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.\n\n[See more information about frequency and presence penalties.](/docs/guides/text-generation)\n"), "seed": z.number().int().nullable().describe("If specified, our system will make a best effort to sample deterministically, such that repeated requests with the same `seed` and parameters should return the same result.\n\nDeterminism is not guaranteed, and you should refer to the `system_fingerprint` response parameter to monitor changes in the backend.\n").optional(), "stop": z.string().nullable().nullable().describe("Up to 4 sequences where the API will stop generating further tokens. The\nreturned text will not contain the stop sequence.\n"), "stream": z.boolean().nullable().describe("Whether to stream back partial progress. If set, tokens will be sent as data-only [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format) as they become available, with the stream terminated by a `data: [DONE]` message. [Example Python code](https://cookbook.openai.com/examples/how_to_stream_completions).\n"), "stream_options": z.object({ "include_usage": z.boolean().describe("If set, an additional chunk will be streamed before the `data: [DONE]`\nmessage. The `usage` field on this chunk shows the token usage statistics\nfor the entire request, and the `choices` field will always be an empty\narray. \n\nAll other chunks will also include a `usage` field, but with a null\nvalue. **NOTE:** If the stream is interrupted, you may not receive the\nfinal usage chunk which contains the total token usage for the request.\n").optional() }).nullable().describe("Options for streaming response. Only set this when you set `stream: true`.\n"), "suffix": z.string().nullable().describe("The suffix that comes after a completion of inserted text.\n\nThis parameter is only supported for `gpt-3.5-turbo-instruct`.\n"), "temperature": z.number().gte(0).lte(2).nullable().describe("What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.\n\nWe generally recommend altering this or `top_p` but not both.\n"), "top_p": z.number().gte(0).lte(1).nullable().describe("An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.\n\nWe generally recommend altering this or `temperature` but not both.\n"), "user": z.string().describe("A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices#end-user-ids).\n").optional() }).optional() }).shape