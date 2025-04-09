import { z } from "zod";
export const inputParams = {
    "source_flow_type": z.enum(["credit_reversal", "other", "outbound_payment", "outbound_transfer", "payout"])
};
