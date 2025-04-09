import { z } from "zod";
export const inputParams = {
    "orderId": z.number().int().describe("ID of order that needs to be fetched")
};
