import User from '../model/UserModel';

export default {
    Render(user: User) {
        return {
            id: user.id,
            name: user.name,
            username: user.userName
        }
    }
}