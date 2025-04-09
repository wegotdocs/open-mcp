import { z } from "zod";
export const inputParams = {
    "destination_uuid": z.string().describe("A unique identifier for an already-existing destination.").optional(),
    "resources": z.array(z.object({ "urn": z.string().regex(new RegExp("^do:kubernetes:.*")).describe("The uniform resource name (URN) for the resource in the format do:resource_type:resource_id."), "name": z.string().describe("resource name").optional() })).describe("List of resources identified by their URNs.").optional()
};
