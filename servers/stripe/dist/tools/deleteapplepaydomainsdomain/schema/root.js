import { z } from "zod";
export const inputParams = {
    "domain": z.string().max(5000)
};
