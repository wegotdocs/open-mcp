import { z } from "zod"

export const inputParamsSchema = {
  "display_name": z.string().describe("A human-readable name for the endpoint").optional(),
  "model": z.string().describe("The model to deploy on this endpoint"),
  "hardware": z.string().describe("The hardware configuration to use for this endpoint"),
  "autoscaling": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `autoscaling` to the tool, first call the tool `expandSchema` with \"/properties/autoscaling\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Configuration for automatic scaling of the endpoint</property-description>"),
  "disable_prompt_cache": z.boolean().describe("Whether to disable the prompt cache for this endpoint").optional(),
  "disable_speculative_decoding": z.boolean().describe("Whether to disable speculative decoding for this endpoint").optional(),
  "state": z.enum(["STARTED","STOPPED"]).describe("The desired state of the endpoint").optional(),
  "inactive_timeout": z.number().int().nullable().describe("The number of minutes of inactivity after which the endpoint will be automatically stopped. Set to null, omit or set to 0 to disable automatic timeout.").optional()
}