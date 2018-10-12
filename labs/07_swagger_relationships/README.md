# Modeling Relationships

Refactor the relationship between policy and translations by breaking the strong
composition.

## Resource Relationships

1. Remove `translations` property from `policy` schema object.

2. Create a new resource, that gets (GET) all translations for a policy:
        /policies/{policyId}/translations

3. Create a new resource, that gets (GET) a translation for a specific language from a
 policy:
        /policies/{policyId}/translations/{language}

4. Create a new resource, that deletes (DELETE) a translation from a policyId.
        /policies/{policyId}/translations/{language}

5. Create a new resource, that adds (PUT) a new translation/language to a policy.
        /policies/{policyId}/translations/{language}


 # Test

 Validate `policies-api.yaml` specification in
 [Swagger Editor](https://swagger-training.ams3.digitaloceanspaces.com/swagger-editor/index.html).
Compare to specification with object relations.
