import { z } from "zod";
export const inputParams = {
    "orderId": z.number().int().describe("ID of the order that needs to be deleted")
};
