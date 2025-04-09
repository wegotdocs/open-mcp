import { z } from "zod";
export const inputParams = {
    "accountHolderCode": z.string().describe("The code of the Account Holder from which to delete the Bank Account(s)."),
    "bankAccountUUIDs": z.array(z.string()).describe("The code(s) of the Bank Accounts to be deleted.")
};
