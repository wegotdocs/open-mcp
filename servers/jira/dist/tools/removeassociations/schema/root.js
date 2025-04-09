import { z } from "zod";
export const inputParams = {
    "associationContexts": z.array(z.object({ "identifier": z.record(z.any()).optional(), "type": z.string() }).strict().describe("Field association for example PROJECT\\_ID.")).describe("Contexts to associate/unassociate the fields with."),
    "fields": z.array(z.object({ "identifier": z.record(z.any()).optional(), "type": z.string() }).strict().describe("Identifier for a field for example FIELD\\_ID.")).describe("Fields to associate/unassociate with projects.")
};
