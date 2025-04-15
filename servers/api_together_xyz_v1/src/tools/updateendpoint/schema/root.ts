import { z } from "zod"

export const inputParams = {
  "endpointId": z.string().describe("The ID of the endpoint to update"),
  "display_name": z.string().describe("A human-readable name for the endpoint").optional(),
  "state": z.enum(["STARTED","STOPPED"]).describe("The desired state of the endpoint").optional(),
  "autoscaling": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `autoscaling` to the tool, first call the tool `expandSchema` with \"/properties/autoscaling\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>New autoscaling configuration for the endpoint</property-description>").optional(),
  "inactive_timeout": z.number().int().nullable().describe("The number of minutes of inactivity after which the endpoint will be automatically stopped. Set to 0 to disable automatic timeout.").optional()
}