import Action from '../model/ActionModel'

export default {
    Render(action: Action) {
        return {
            id: action.id,
            action: action.action
        }
    }
}