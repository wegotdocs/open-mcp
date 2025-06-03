import { z } from "zod"

export const inputParamsSchema = {
  "top": z.number().int().gte(10).lte(1000).describe("The number of email domains returned on each page. Supported range: 10-1000\n").optional(),
  "TMV1-Filter": z.string().max(512).describe("The filter used to retrieve a subset of email domains from a generated paginated list.\n\n| Field | Description | Supported values |\n|-----|-----|-----|\n| inboundConfigurationStatus | The domain's inbound configuration status. | 'Completed', 'Configuration required', 'Disabled' |\n| outboundConfigurationStatus | The domain's outbound configuration status. | 'Completed', 'Configuration required', 'Disabled' |\n\n| Operator | Description | Notes |\n|-----|-----|-----|\n| `eq` | Operator \"equal to\" | - |\n| `and` | Operator \"and\" | - |\n\nOnly support `eq`, `and` operators.\n").optional()
}