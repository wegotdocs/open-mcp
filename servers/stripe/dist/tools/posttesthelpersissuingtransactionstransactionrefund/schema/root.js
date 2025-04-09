import { z } from "zod";
export const inputParams = {
    "transaction": z.string().max(5000)
};
