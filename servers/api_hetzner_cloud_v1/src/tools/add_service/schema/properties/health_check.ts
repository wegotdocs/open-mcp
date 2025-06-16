import { z } from "zod"

export const inputParamsSchema = {
  "http": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `http` to the tool, first call the tool `expandSchema` with \"/properties/health_check/properties/http\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Additional configuration for protocol http</property-description>").optional(),
  "interval": z.number().int().describe("Time interval in seconds health checks are performed"),
  "port": z.number().int().describe("Port the health check will be performed on"),
  "protocol": z.enum(["http","tcp"]).describe("Type of the health check"),
  "retries": z.number().int().describe("Unsuccessful retries needed until a target is considered unhealthy; an unhealthy target needs the same number of successful retries to become healthy again"),
  "timeout": z.number().int().describe("Time in seconds after an attempt is considered a timeout")
}