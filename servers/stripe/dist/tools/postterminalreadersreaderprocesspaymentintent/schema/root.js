import { z } from "zod";
export const inputParams = {
    "reader": z.string().max(5000)
};
