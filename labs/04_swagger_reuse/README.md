# Reusability

## Refactor Schemas into Definitions Section

1. Create a `definitions` property in the api specifcation root.
2. Create object properties for following objects within `definitions`.
Use `$ref` references to reference sub schemas:

        language:
        * type: string
        * minLength, maxLength constraints: 2
        * default: de

        policyTypes:
        * type: string
        * enum: privacy, cookie, terms

        audience:
        * type: string
        * enum: regional, international

        translation:
        * type: object
        * properties:
            - title:
                * type: string
            - releaseDate:
                * type: string
                * format: date-time
            - language:
                * $ref: '#/definitions/language'
            - version:
                * type: integer
        * required: title, language

        policy:
        * type: object
        * properties:
            - id:
                * type: string
                * format: uuid
            - title:
                * type: string
                * description: The title of the policy
                * maxLength: 50
            - policyType:
                * $ref: '#/definitions/policyType'
            - audience:
                * $ref: '#/definitions/audience'
            - defaultLanguage:
                * $ref: '#/definitions/language'
            - mandatory:
                * type: boolean
                * default: false
            - translations:
                * type: array
                * items:
                    * $ref: '#/definitions/translation'
        * required: id, title, policyType

3. Replace schema in `responses/200/schema/items` with `$ref` reference to
`#/definitions/policies`.

# Test

Validate `policies-api.yaml` specification in
[Swagger Editor](https://swagger-training.ams3.digitaloceanspaces.com/swagger-editor/index.html).
