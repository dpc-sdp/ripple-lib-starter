#!/bin/bash

# Default values
project=""
environment=""
output_file=".env"
append=false
ssh_key="~/.ssh/id_rsa"

while [[ $# -gt 0 ]]; do
    case "$1" in
        -a|--append)
            append=true
            shift
            ;;
        -o|--output)
            if [ -n "$2" ]; then
                output_file="$2"
                shift 2
            else
                echo "Error: Missing argument for $1 option"
                exit 1
            fi
            ;;
        --ssh-key)
            if [ -n "$2" ]; then
                ssh_key="$2"
                shift 2
            else
                echo "Error: Missing argument for $1 option"
                exit 1
            fi
            ;;
        -h|--help)
            echo "Usage: $0 [options] <project> [environment]"
            echo "Options:"
            echo "  -a, --append    Append to the existing output file (if present)"
            echo "  -o, --output    Specify the output file path (default: .env)"
            echo "  --ssh-key       Specify the SSH key path (default: ~/.ssh/id_rsa)"
            echo "  -h, --help      Display this help message"
            exit 0
            ;;
        *)
            if [ -z "$project" ]; then
                project="$1"
            elif [ -z "$environment" ]; then
                environment="$1"
            else
                echo "Too many arguments!"
                exit 1
            fi
            shift
            ;;
    esac
done

if [ -z "$project" ]; then
    echo "Usage: $0 [options] <project> [environment]"
    exit 1
fi

# Construct the 'lagoon list variables' command based on whether environment is provided
if [ -z "$environment" ]; then
    json_output=$(lagoon list variables --project "$project" --reveal --output-json -i $ssh_key)
else
    json_output=$(lagoon list variables --project "$project" -e "$environment" --reveal --output-json -i $ssh_key)
fi


# Use jq to iterate over the 'data' array and echo the 'variablename' and 'variablevalue'
output_data=$(jq -r '.data[] | "\(.name)=\(.value)"' <<< "$json_output")

# Check if an output file path is provided and save the output to the file
if [ "$append" = true ]; then
    echo "#$environment" >> "$output_file"
    echo "$output_data" >> "$output_file"
else
    echo "$output_data" > "$output_file"
fi

# If no output file is specified, print the output to the terminal
echo "$output_data"
