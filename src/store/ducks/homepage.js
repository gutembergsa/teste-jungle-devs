import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { axiosService } from '../../services'

const initialState = {
	user: '',
	formIsLoading: false,
}

const actions = {
	formLoading: (state, action) => {
		state.formIsLoading = action.payload
	},
	defineUser: (state) => {
		if (!state?.user?.lenght || !localStorage.getItem('persist:root')) {
			state.user = `user-${Date.now()}`
		}
	},
}

const actionsThunks = {
	subscribeNewsletter: createAsyncThunk('users/fetch', async (data, { rejectWithValue }) => {
		const resolved = await axiosService
			.post('challenge-newsletter/', data)
			.then((response) => response.data)
			.catch((err) => rejectWithValue(err.response.data))
		return resolved
	}),
}

const homepageSlice = createSlice({
	name: 'homepage',
	initialState,
	reducers: actions,
	extraReducers: (builder) => {
		builder.addCase(actionsThunks.subscribeNewsletter.pending, (state) => {
			state.formIsLoading = true
		})
		builder.addCase(actionsThunks.subscribeNewsletter.fulfilled, (state) => {
			state.formIsLoading = false
			toast.success('Subscribed!')
		})
		builder.addCase(actionsThunks.subscribeNewsletter.rejected, (state) => {
			state.formIsLoading = false
			toast.error('Ops something goes wrong :(')
		})
	},
})

export const combinedActions = { ...homepageSlice.actions, ...actionsThunks }
export default homepageSlice.reducer
