import { z } from "zod"

export const inputParamsSchema = {
  "autoscale_pool_id": z.string().describe("A unique identifier for an autoscale pool."),
  "name": z.string().describe("The human-readable name of the autoscale pool. This field cannot be updated"),
  "config": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `config` to the tool, first call the tool `expandSchema` with \"/properties/config\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The scaling configuration for an autoscale pool, which is how the pool scales up and down (either by resource utilization or static configuration).</property-description>"),
  "droplet_template": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `droplet_template` to the tool, first call the tool `expandSchema` with \"/properties/droplet_template\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>")
}