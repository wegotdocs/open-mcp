import { z } from "zod";
export const inputParams = {
    "accountHolderCode": z.string().describe("The code of the Account Holder from which to delete the Shareholders."),
    "shareholderCodes": z.array(z.string()).describe("The code(s) of the Shareholders to be deleted.")
};
