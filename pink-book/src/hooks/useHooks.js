import { reactive } from 'vue'

const useHooks = () => {

    const state = reactive({
        isRefresh: false,

    })

    const changeRefresh = (val) => {
        state.isRefresh = val
        console.log(state.isRefresh)
    }
    return {
        state,
        changeRefresh
    }
}
export default useHooks()

