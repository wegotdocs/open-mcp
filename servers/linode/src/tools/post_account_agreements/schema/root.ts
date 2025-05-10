import { z } from "zod"

export const inputParams = {
  "billing_agreement": z.boolean().describe("Certain regions require that you share your tax identification number (TIN) with Akamai. When you do, you need to acknowledge Akamai's [privacy statement](https://www.akamai.com/legal/privacy-statement) agreement, in regards to its protection. When set to `true`, you've acknowledged this agreement.").optional(),
  "eu_model": z.boolean().describe("The acknowledgement status for the [cross-border data transfer](https://www.akamai.com/legal/compliance/privacy-trust-center/cross-border-data-transfer-statement) agreement.").optional(),
  "master_service_agreement": z.boolean().describe("The acknowledgement status for Akamai's [master service agreement](https://www.linode.com/legal-msa/).").optional(),
  "privacy_policy": z.boolean().describe("The acknowledgement status for Akamai's [privacy statement](https://www.akamai.com/legal/privacy-statement).").optional()
}