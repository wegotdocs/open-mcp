import { z } from "zod";
export const inputParams = {
    "name": z.string().regex(new RegExp("^[a-z0-9-]{1,63}$")).max(63).describe("A globally unique name for the container registry. Must be lowercase and be composed only of numbers, letters and `-`, up to a limit of 63 characters."),
    "subscription_tier_slug": z.enum(["starter", "basic", "professional"]).describe("The slug of the subscription tier to sign up for. Valid values can be retrieved using the options endpoint."),
    "region": z.enum(["nyc3", "sfo3", "ams3", "sgp1", "fra1"]).describe("Slug of the region where registry data is stored. When not provided, a region will be selected.").optional()
};
