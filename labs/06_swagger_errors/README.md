# Error Handling

## Implement Not Found on "by id" Operations

1. Create a new error definition object:
        type: string
2. Add error response (`404 Not Found`) to `responses` for resource operations:
    * `/policies/{policyId} -> get`
    * `/policies/{policyId} -> delete`

## Reuse Error Response definition (optional)

1. Create a response definition under root `responses` property:
        name: notFound
2. Replace `404` responses in operations with references to `notFound` response:
        $ref: `#/responses/notFound`

# Test

Validate `policies-api.yaml` specification in
[Swagger Editor](https://swagger-training.ams3.digitaloceanspaces.com/swagger-editor/index.html).    
