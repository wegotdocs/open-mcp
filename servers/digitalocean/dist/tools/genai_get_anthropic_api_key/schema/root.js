import { z } from "zod";
export const inputParams = {
    "api_key_uuid": z.string().describe("API key ID")
};
