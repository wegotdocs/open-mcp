import { z } from "zod";
export const inputParams = {
    "projectTypeKey": z.enum(["software", "service_desk", "business", "product_discovery"]).describe("The key of the project type.")
};
