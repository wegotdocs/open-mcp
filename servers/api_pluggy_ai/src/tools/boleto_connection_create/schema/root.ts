import { z } from "zod"

export const inputParamsSchema = {
  "connectorId": z.number().int().gte(1).describe("Connector identifier. Check out the list of connectors, and if it has the flag 'supportsBoletoManagement' as true, it means it's possible to create a boleto connection with it."),
  "credentials": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `credentials` to the tool, first call the tool `expandSchema` with \"/properties/credentials\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Credentials required for the connection. For Inter, they are clientId, clientSecret, certificate and privateKey, follow: https://docs.pluggy.ai/docs/connect-an-account#inter-pj</property-description>")
}