# Swagger Security

## Security Definitions

Add security definitions to `policies-api.yaml`:

* external:
    - type: apiKey
    - in: header
* admin:
    - type: basic

## Security Requirements

Add security requirements to operations:

* external: all operations
* admin: only write operations

# Test

Validate `policies-api.yaml` specification in Swagger Editor. Execute operations
w/ and w/o authorization (login, apikey).
