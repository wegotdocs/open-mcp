import { z } from "zod";
export const inputParams = {
    "labelId": z.string().uuid().describe("ID of the label to delete")
};
