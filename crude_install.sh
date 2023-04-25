#!/bin/bash

shopt -s extglob

# Function to run the copy script
run_script() {
    # Get list of directories in root directory "../", except for "kozz-types"
    projects=( $(ls -d ../!(*kozz-types)) )

    # Generate "./dist" folder with new .d.ts files
    yarn tsc

    # Copy contents from "./dist" to each {project}/node_modules/kozz-types/dist
    for project in "${projects[@]}"
    do
        destination="$project/node_modules/kozz-types/dist"
        cp -r ./dist/* $destination
    done
}

# Run the copy script once at the start
run_script

# Watch for changes in "./kozz-types/src"
if command -v inotifywait &> /dev/null
then
    while true
    do
        inotifywait -r -e modify,create,delete,move ./src
        run_script
    done
else
    echo "inotifywait is not installed. Cannot watch for changes."
fi
