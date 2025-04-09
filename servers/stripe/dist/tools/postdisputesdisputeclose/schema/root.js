import { z } from "zod";
export const inputParams = {
    "dispute": z.string().max(5000)
};
