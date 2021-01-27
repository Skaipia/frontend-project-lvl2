#!/usr/bin/env node
import program from 'commander'

program.version('0.0.1')
    .option('-V, --version', 'output the version number')
    .option('-h, --help', 'output usage information')
    .option('-f, --format [type]', 'output format')