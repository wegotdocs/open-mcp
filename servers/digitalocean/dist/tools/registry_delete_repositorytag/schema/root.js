import { z } from "zod";
export const inputParams = {
    "registry_name": z.string().describe("The name of a container registry."),
    "repository_name": z.string().describe("The name of a container registry repository. If the name contains `/` characters, they must be URL-encoded, e.g. `%2F`."),
    "repository_tag": z.string().describe("The name of a container registry repository tag.")
};
