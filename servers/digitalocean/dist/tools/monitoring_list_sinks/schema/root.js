import { z } from "zod";
export const inputParams = {
    "resource_id": z.string().regex(new RegExp("^do:(dbaas|domain|droplet|floatingip|loadbalancer|space|volume|kubernetes|vpc):.*")).describe("The uniform resource name (URN) for the resource in the format do:resource_type:resource_id.").optional()
};
