import { z } from "zod";
export const inputParams = {
    "account": z.string().max(5000),
    "person": z.string().max(5000)
};
