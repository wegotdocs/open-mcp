import { z } from "zod";
export const inputParams = {
    "test_clock": z.string().max(5000)
};
