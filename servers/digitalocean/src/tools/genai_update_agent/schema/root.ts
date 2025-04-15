import { z } from "zod"

export const inputParamsSchema = {
  "uuid": z.string().describe("Unique agent id"),
  "anthropic_key_uuid": z.string().describe("Optional anthropic key uuid for use with anthropic models").optional(),
  "description": z.string().describe("Agent description").optional(),
  "instruction": z.string().describe("Agent instruction. Instructions help your agent to perform its job effectively. See [Write Effective Agent Instructions](https://docs.digitalocean.com/products/genai-platform/concepts/best-practices/#agent-instructions) for best practices.").optional(),
  "k": z.number().int().describe("How many results should be considered from an attached knowledge base").optional(),
  "max_tokens": z.number().int().describe("Specifies the maximum number of tokens the model can process in a single input or output, set as a number between 1 and 512. This determines the length of each response.").optional(),
  "model_uuid": z.string().describe("Identifier for the foundation model.").optional(),
  "name": z.string().describe("Agent name").optional(),
  "open_ai_key_uuid": z.string().describe("Optional OpenAI key uuid for use with OpenAI models").optional(),
  "project_id": z.string().describe("The id of the DigitalOcean project this agent will belong to").optional(),
  "retrieval_method": z.enum(["RETRIEVAL_METHOD_UNKNOWN","RETRIEVAL_METHOD_REWRITE","RETRIEVAL_METHOD_STEP_BACK","RETRIEVAL_METHOD_SUB_QUERIES","RETRIEVAL_METHOD_NONE"]).describe("- RETRIEVAL_METHOD_UNKNOWN: The retrieval method is unknown\n - RETRIEVAL_METHOD_REWRITE: The retrieval method is rewrite\n - RETRIEVAL_METHOD_STEP_BACK: The retrieval method is step back\n - RETRIEVAL_METHOD_SUB_QUERIES: The retrieval method is sub queries\n - RETRIEVAL_METHOD_NONE: The retrieval method is none").optional(),
  "tags": z.array(z.string()).describe("A set of abitrary tags to organize your agent").optional(),
  "temperature": z.number().describe("Controls the model’s creativity, specified as a number between 0 and 1. Lower values produce more predictable and conservative responses, while higher values encourage creativity and variation.").optional(),
  "top_p": z.number().describe("Defines the cumulative probability threshold for word selection, specified as a number between 0 and 1. Higher values allow for more diverse outputs, while lower values ensure focused and coherent responses.").optional(),
  "b_uuid": z.string().describe("Unique agent id").optional()
}