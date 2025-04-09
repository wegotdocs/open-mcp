import { z } from "zod";
export const inputParams = {
    "destination_uuid": z.string().describe("A unique identifier for a destination."),
    "name": z.string().describe("destination name").optional(),
    "type": z.enum(["opensearch_dbaas", "opensearch_ext"]).describe("The destination type. `opensearch_dbaas` for a DigitalOcean managed OpenSearch\ncluster or `opensearch_ext` for an externally managed one.\n"),
    "config": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `config` to the tool, first call the tool `expandSchema` with \"/properties/config\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>")
};
