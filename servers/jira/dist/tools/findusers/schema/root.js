import { z } from "zod";
export const inputParams = {
    "query": z.string().describe("A query string that is matched against user attributes ( `displayName`, and `emailAddress`) to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*. Required, unless `accountId` or `property` is specified.").optional(),
    "username": z.string().optional(),
    "accountId": z.string().max(128).describe("A query string that is matched exactly against a user `accountId`. Required, unless `query` or `property` is specified.").optional(),
    "startAt": z.number().int().describe("The index of the first item to return in a page of filtered results (page offset).").optional(),
    "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
    "property": z.string().describe("A query string used to search properties. Property keys are specified by path, so property keys containing dot (.) or equals (=) characters cannot be used. The query string cannot be specified using a JSON object. Example: To search for the value of `nested` from `{\"something\":{\"nested\":1,\"other\":2}}` use `thepropertykey.something.nested=1`. Required, unless `accountId` or `query` is specified.").optional()
};
