#!/usr/bin/env bash

ajv -s customer.schema.json -r address.schema.json -d customer.json
