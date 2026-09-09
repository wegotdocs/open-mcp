RELEASE=boltmcp
rand() { openssl rand -hex 32; }

kubectl create secret generic ${RELEASE}-database -n boltmcp \
  --from-literal=superuser-password="$(rand)" \
  --from-literal=migrate-core-password="$(rand)" \
  --from-literal=web-password="$(rand)" \
  --from-literal=rest-api-password="$(rand)" \
  --from-literal=mcp-server-password="$(rand)" \
  --from-literal=keycloak-password="$(rand)" \
  --from-literal=vault-password="$(rand)"

kubectl create secret generic ${RELEASE}-oidc -n boltmcp \
  --from-literal=web-client-secret="$(rand)" \
  --from-literal=mcp-server-client-secret="$(rand)" \
  --from-literal=rest-api-to-keycloak-client-secret="$(rand)" \
  --from-literal=keycloak-reconcile-client-secret="$(rand)"

kubectl create secret generic ${RELEASE}-auth -n boltmcp \
  --from-literal=web-auth-secret="$(rand)" \
  --from-literal=keycloak-admin-password="$(rand)" \
  --from-literal=boltmcp-admin-password="$(rand)" \
  --from-literal=mcp-inspector-api-token="$(rand)" \
  --from-literal=mcp-server-upstream-oauth-secret="$(rand)"
