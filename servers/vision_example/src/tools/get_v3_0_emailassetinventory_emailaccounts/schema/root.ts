import { z } from "zod"

export const inputParamsSchema = {
  "top": z.number().int().gte(10).lte(1000).describe("The number of email accounts returned on each page. Supported range: 10-1000\n").optional(),
  "TMV1-Filter": z.string().max(512).describe("The filter used to retrieve a subset of email accounts from a generated paginated list.\n\nSupported fields:\n\n| Field | Description | Supported values |\n|-----|-----|-----|\n| sensorDetectionStatus | The account's email sensor detection status. | Enabled, Disabled |\n| protectionPolicyStatus | The account's Cloud Email and Collaboration Protection policy status. | 'Disabled', 'Fully enabled', 'Partially enabled' |\n| mailService | The account's mail service (iam) type. | 'Exchange Online', 'Gmail', 'Unknown' |\n\nSupported operators:\n\n| Operator | Description | Notes |\n|-----|-----|-----|\n| `eq` | Operator \"equal to\" | - |\n| `and` | Operator \"and\" | - |\n\nOnly support `eq`, `and` operators.\n").optional()
}