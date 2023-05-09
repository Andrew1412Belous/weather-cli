#!use/bin/env node

import { getArgs } from "./helpers/args.js"
import { printHelp, printSuccess, printError } from './services/log.service.js'
import { saveKeyValue } from './services/storage.service.js'

const saveToken = async (token) => {
	try {
		await saveKeyValue('token', token)

		printSuccess('Token saved')
	} catch (e) {
		printError(e.message)
	}
}

const initCLI = () => {
	const args = getArgs(process.argv)

	if (args.h) {
		printHelp()
	} else if (args.s) {

	} else if (args.t) {
		return saveToken('token', args.t)
	}

}

initCLI()
