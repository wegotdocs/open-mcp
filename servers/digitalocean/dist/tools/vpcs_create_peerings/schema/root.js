import { z } from "zod";
export const inputParams = {
    "vpc_id": z.string().uuid().describe("A unique identifier for a VPC."),
    "name": z.string().regex(new RegExp("^[a-zA-Z0-9\\-\\.]+$")).describe("The name of the VPC peering. Must be unique and may only contain alphanumeric characters, dashes, and periods."),
    "b_vpc_id": z.string().uuid().describe("The ID of the VPC to peer with.")
};
