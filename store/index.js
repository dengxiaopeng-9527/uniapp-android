import { createStore } from 'vuex';
import home from './modules/home';

const store = createStore({
	modules: {
		home
	}
})

export default store