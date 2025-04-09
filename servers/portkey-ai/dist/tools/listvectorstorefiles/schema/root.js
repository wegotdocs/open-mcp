import { z } from "zod";
export const inputParams = {
    "vector_store_id": z.string().describe("The ID of the vector store that the files belong to."),
    "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.\n").optional(),
    "order": z.enum(["asc", "desc"]).describe("Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.\n").optional(),
    "after": z.string().describe("A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.\n").optional(),
    "before": z.string().describe("A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.\n").optional(),
    "filter": z.enum(["in_progress", "completed", "failed", "cancelled"]).describe("Filter by file status. One of `in_progress`, `completed`, `failed`, `cancelled`.").optional()
};
