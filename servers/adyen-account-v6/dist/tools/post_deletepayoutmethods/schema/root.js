import { z } from "zod";
export const inputParams = {
    "accountHolderCode": z.string().describe("The code of the account holder, from which to delete the payout methods."),
    "payoutMethodCodes": z.array(z.string()).describe("The codes of the payout methods to be deleted.")
};
