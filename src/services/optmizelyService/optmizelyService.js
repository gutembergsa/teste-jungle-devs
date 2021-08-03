import { createInstance, setLogger } from '@optimizely/react-sdk'

setLogger(null)

export const optimizely = createInstance({
	sdkKey: process.env.REACT_APP_OPTIMIZELY_ID,
	logger: false,
})
