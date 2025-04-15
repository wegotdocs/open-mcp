import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().optional(),
  "provider": z.enum(["openai","azure-openai","ai21","anthropic","anyscale","azure-openai","bedrock","cohere","deepinfra","fireworks-ai","google","groq","hugging-face","jina","lingyi","mistral-ai","monsterapi","moonshot","nomic","novita-ai","open-ai","openrouter","palm","perplexity-ai","predibase","reka-ai","segmind","stability-ai","together-ai","vertex-ai","workers-ai","zhipu"]).optional(),
  "key": z.string().optional(),
  "note": z.string().nullable().optional(),
  "apiVersion": z.string().nullable().optional(),
  "resourceName": z.string().nullable().optional(),
  "deploymentName": z.string().nullable().optional(),
  "workspace_id": z.string().uuid().describe("optional, needed when using organisation admin API keys").optional(),
  "deploymentConfig": z.array(z.object({ "apiVersion": z.string(), "alias": z.string().optional(), "is_default": z.boolean().optional(), "deploymentName": z.string() })).optional(),
  "usage_limits": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `usage_limits` to the tool, first call the tool `expandSchema` with \"/properties/usage_limits\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "rate_limits": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `rate_limits` to the tool, first call the tool `expandSchema` with \"/properties/rate_limits\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}