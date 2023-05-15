import { LoginForm, RegisterForm, UserInterface } from '../../interfaces/user.interface'

class AuthControllerAPI {
    register(user: RegisterForm): string[] {
        try {
            const localStorageItem = localStorage.getItem('users')
            if (localStorageItem !== null) {
                const userList: UserInterface[] = JSON.parse(localStorageItem)
                const resp = userList.find((u) => u.username === user.username)
                if (resp === undefined) {
                    const newUser = { ...user, id: userList.length - 1 }
                    userList.push(newUser)
                    const usersJson = JSON.stringify(userList)
                    localStorage.setItem('users', usersJson)
                    return ['Username created successfully', 'Success']
                } else {
                    return ['The username already exist', 'Fail']
                }
            } else {
                return ["The moked data hasn't been created yet", 'Fail']
            }
        } catch (err) {
            return ['Fatal Warning', 'Fail']
        }
    }

    login(form: LoginForm): string[] {
        try {
            const localStorageItem = localStorage.getItem('users')
            if (localStorageItem !== null) {
                const userList: UserInterface[] = JSON.parse(localStorageItem)
                const resp = userList.find((u) => u.username === form.username)
                if (resp !== undefined) {
                    return ['Login successfully', 'Success', resp.uuid]
                } else {
                    return ['The username or the password are worng', 'Fail']
                }
            } else {
                return ["The moked data hasn't been created yet", 'Fail']
            }
        } catch (err) {
            return ['Fatal Warning', 'Fail']
        }
    }
}

const AuthController = new AuthControllerAPI()

export { AuthController }
