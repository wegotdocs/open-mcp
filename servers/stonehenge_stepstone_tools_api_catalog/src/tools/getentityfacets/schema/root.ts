import { z } from "zod"

export const inputParamsSchema = {
  "facet": z.array(z.string()),
  "filter": z.array(z.string()).describe("You can pass in one or more filter sets that get matched against each entity.\nEach filter set is a number of conditions that all have to match for the\ncondition to be true (conditions effectively have an AND between them). At least\none filter set has to be true for the entity to be part of the result set\n(filter sets effectively have an OR between them).\n\nExample:\n\n```text\n/entities/by-query?filter=kind=user,metadata.namespace=default&filter=kind=group,spec.type\n\n  Return entities that match\n\n    Filter set 1:\n      Condition 1: kind = user\n                  AND\n      Condition 2: metadata.namespace = default\n\n    OR\n\n    Filter set 2:\n      Condition 1: kind = group\n                  AND\n      Condition 2: spec.type exists\n```\n\nEach condition is either on the form `<key>`, or on the form `<key>=<value>`.\nThe first form asserts on the existence of a certain key (with any value), and\nthe second asserts that the key exists and has a certain value. All checks are\nalways case _insensitive_.\n\nIn all cases, the key is a simplified JSON path in a given piece of entity data.\nEach part of the path is a key of an object, and the traversal also descends\nthrough arrays. There are two special forms:\n\n- Array items that are simple value types (such as strings) match on a key-value\n  pair where the key is the item as a string, and the value is the string `true`\n- Relations can be matched on a `relations.<type>=<targetRef>` form\n\nLet's look at a simplified example to illustrate the concept:\n\n```json\n{\n  \"a\": {\n    \"b\": [\"c\", { \"d\": 1 }],\n    \"e\": 7\n  }\n}\n```\n\nThis would match any one of the following conditions:\n\n- `a`\n- `a.b`\n- `a.b.c`\n- `a.b.c=true`\n- `a.b.d`\n- `a.b.d=1`\n- `a.e`\n- `a.e=7`\n\nSome more real world usable examples:\n\n- Return all orphaned entities:\n\n  `/entities/by-query?filter=metadata.annotations.backstage.io/orphan=true`\n\n- Return all users and groups:\n\n  `/entities/by-query?filter=kind=user&filter=kind=group`\n\n- Return all service components:\n\n  `/entities/by-query?filter=kind=component,spec.type=service`\n\n- Return all entities with the `java` tag:\n\n  `/entities/by-query?filter=metadata.tags.java`\n\n- Return all users who are members of the `ops` group (note that the full\n  [reference](references.md) of the group is used):\n\n  `/entities/by-query?filter=kind=user,relations.memberof=group:default/ops`\n").optional()
}