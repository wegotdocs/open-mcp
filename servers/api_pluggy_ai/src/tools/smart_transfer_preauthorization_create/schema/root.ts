import { z } from "zod"

export const inputParamsSchema = {
  "connectorId": z.number().describe("Primary identifier of the connector").optional(),
  "parameters": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `parameters` to the tool, first call the tool `expandSchema` with \"/properties/parameters\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Credentials neccesary to create a smart transfer preauthorization</property-description>").optional(),
  "recipientIds": z.array(z.string().describe("Primary identifier of the payment recipient")).optional(),
  "callbackUrls": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `callbackUrls` to the tool, first call the tool `expandSchema` with \"/properties/callbackUrls\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Redirect urls after the preauthorization flow was completed or ended in error status</property-description>").optional(),
  "clientPreauthorizationId": z.string().describe("Client preauthorization identifier").optional()
}