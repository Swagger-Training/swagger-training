# Implement an API

## Resources and Operations

1. Create a new resource `/policies`.
2. Create a new `get` operation, that gets all policies.

## Responses

1. Create a success response (`200 OK`).
2. Define the response schema (policy schema):

        * type: object
        * parameters:
            - id:
                * type: string
                * format: uuid
            - title:
                * type: string
                * description: The title of the policy
                * maxLength: 50
            - policyType:
                * type: string
                * enum: privacy, cookie, terms
            - audience:
                * type: string
                * enum: regional, international
            - defaultLanguage:
                * type: string
                * minLength, maxLength constraints: 2
                * default: de
            - mandatory:
                * type: boolean
                * default: false
            - translations:
                * type: array
                * items:
                    * type: object
                    * properties:
                        - title:
                            * type: string
                        - releaseDate:
                            * type: string
                            * format: date-time
                        - language:
                            * type: string
                            * minLength, maxLength constraints: 2
                            * default: de
                        - version:
                            * type: integer
                * required: title, language
        * required: id, title, policyType


## Parameters (optional)

1. Create a `query` parameter named "policyType" to filter policies by type.

## Examples (optional)

1. Add a sample response for mime type `application/json`.

# Test

Validate `policies-api.yaml` specification in
[Swagger Editor](https://swagger-training.ams3.digitaloceanspaces.com/swagger-editor/index.html).
