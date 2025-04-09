import { z } from "zod";
export const inputParams = {
    "tokenId": z.string().describe("The identifier of the token to invalidate. The special value \\\"current\\\" may be supplied, which invalidates the token that the HTTP request was authenticated with.")
};
