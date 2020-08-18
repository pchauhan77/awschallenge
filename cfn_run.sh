#!/usr/bin/env bash

stack_name=aws-challenge

aws cloudformation deploy --template-file template.yaml --stack-name $stack_name --capabilities CAPABILITY_NAMED_IAM
