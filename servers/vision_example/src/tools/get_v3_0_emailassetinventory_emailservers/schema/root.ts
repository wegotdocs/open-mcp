import { z } from "zod"

export const inputParamsSchema = {
  "top": z.number().int().gte(10).lte(1000).describe("The number of email servers returned on each page. Supported range: 10-1000\n").optional(),
  "TMV1-Filter": z.string().max(512).describe("The filter used to retrieve a subset of email servers from a generated paginated list.\n\nSupported fields:\n| Field | Description | Supported values |\n|-----|-----|-----|\n| `onPremisesProtectionSolution` | The domain's inbound configuration status. | 'ScanMail for Microsoft Exchange', 'Deep Discovery Email Inspector', 'InterScan Messaging Security Virtual Appliance' |\n\nSupported operators:\n| Operator | Description | Notes |\n|-----|-----|-----|\n| `eq` | Operator \"equal to\" | - |\n\nOnly support `eq` operator.\n").optional()
}