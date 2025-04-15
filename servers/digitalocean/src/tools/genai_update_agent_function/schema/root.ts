import { z } from "zod"

export const inputParamsSchema = {
  "agent_uuid": z.string().describe("Agent id"),
  "function_uuid": z.string().describe("Function id"),
  "b_agent_uuid": z.string().describe("Agent id").optional(),
  "description": z.string().describe("Funciton description").optional(),
  "faas_name": z.string().describe("The name of the function in the DigitalOcean functions platform").optional(),
  "faas_namespace": z.string().describe("The namespace of the function in the DigitalOcean functions platform").optional(),
  "function_name": z.string().describe("Function name").optional(),
  "b_function_uuid": z.string().describe("Function id").optional(),
  "input_schema": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `input_schema` to the tool, first call the tool `expandSchema` with \"/properties/input_schema\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Describe the input schema for the function so the agent may call it</property-description>").optional(),
  "output_schema": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `output_schema` to the tool, first call the tool `expandSchema` with \"/properties/output_schema\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Describe the output schema for the function so the agent handle its response</property-description>").optional()
}