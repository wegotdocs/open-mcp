import { z } from "zod"

export const toolName = `genai_create_agent`
export const toolDescription = `Create an Agent`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/gen-ai/agents`
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
    "anthropic_key_uuid",
    "description",
    "instruction",
    "knowledge_base_uuid",
    "model_uuid",
    "name",
    "project_id",
    "region",
    "tags"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "anthropic_key_uuid": z.string().describe("Optional Anthropic API key ID to use with Anthropic models").optional(), "description": z.string().describe("A text description of the agent, not used in inference").optional(), "instruction": z.string().describe("Agent instruction. Instructions help your agent to perform its job effectively. See [Write Effective Agent Instructions](https://docs.digitalocean.com/products/genai-platform/concepts/best-practices/#agent-instructions) for best practices.").optional(), "knowledge_base_uuid": z.array(z.string()).describe("Ids of the knowledge base(s) to attach to the agent").optional(), "model_uuid": z.string().describe("Identifier for the foundation model.").optional(), "name": z.string().describe("Agent name").optional(), "project_id": z.string().describe("The id of the DigitalOcean project this agent will belong to").optional(), "region": z.string().describe("The DigitalOcean region to deploy your agent in").optional(), "tags": z.array(z.string()).describe("Agent tag to organize related resources").optional() }).shape