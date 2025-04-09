import { z } from "zod";
export const inputParams = {
    "accountHolderCode": z.string().describe("The account holder code you provided when you created the account holder."),
    "formType": z.string().describe("Type of the requested tax form. For example, 1099-K."),
    "year": z.number().int().describe("Applicable tax year in the YYYY format.")
};
