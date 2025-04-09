import { z } from "zod";
export const inputParams = {
    "name": z.string().regex(new RegExp("^[a-z0-9-]{1,63}$")).max(63).describe("A globally unique name for the container registry. Must be lowercase and be composed only of numbers, letters and `-`, up to a limit of 63 characters.")
};
