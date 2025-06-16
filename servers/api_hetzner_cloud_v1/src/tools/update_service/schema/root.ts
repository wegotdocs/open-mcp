import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().lte(9007199254740991).describe("ID of the Load Balancer."),
  "destination_port": z.number().int().describe("Port the Load Balancer will balance to").optional(),
  "health_check": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `health_check` to the tool, first call the tool `expandSchema` with \"/properties/health_check\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Service health check</property-description>").optional(),
  "http": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `http` to the tool, first call the tool `expandSchema` with \"/properties/http\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Configuration option for protocols http and https</property-description>").optional(),
  "listen_port": z.number().int().describe("Port the Load Balancer listens on"),
  "protocol": z.enum(["http","https","tcp"]).describe("Protocol of the Load Balancer").optional(),
  "proxyprotocol": z.boolean().describe("Is Proxyprotocol enabled or not").optional()
}