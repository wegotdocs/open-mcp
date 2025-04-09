import { z } from "zod";
export const inputParams = {
    "invoiceitem": z.string().max(5000)
};
