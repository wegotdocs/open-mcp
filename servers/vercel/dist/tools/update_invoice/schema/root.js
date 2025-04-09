import { z } from "zod";
export const inputParams = {
    "integrationConfigurationId": z.string(),
    "invoiceId": z.string(),
    "action": z.literal("refund"),
    "reason": z.string().describe("Refund reason."),
    "total": z.string().regex(new RegExp("^[0-9]+(\\\\.[0-9]+)?$")).describe("The total amount to be refunded. Must be less than or equal to the total amount of the invoice.")
};
