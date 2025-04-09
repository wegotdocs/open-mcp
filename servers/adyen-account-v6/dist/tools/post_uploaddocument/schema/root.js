import { z } from "zod";
export const inputParams = {
    "documentContent": z.string().describe("The content of the document, in Base64-encoded string format.\n\nTo learn about document requirements, refer to [Verification checks](https://docs.adyen.com/classic-platforms/verification-checks)."),
    "documentDetail": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `documentDetail` to the tool, first call the tool `expandSchema` with \"/properties/documentDetail\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Details of the document being submitted.</property-description>")
};
