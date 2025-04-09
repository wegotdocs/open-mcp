import { z } from "zod";
export const inputParams = {
    "name": z.string().max(256).describe("The name of the `Project`.")
};
