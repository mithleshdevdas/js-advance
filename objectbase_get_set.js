const user = {
    _email: 'das@ai.com',
    _pass: 'ab1c',

    get email() {
        return this._email.toUpperCase() },
    set email(value) {
        this._email= value
    },
}

const tea = Object.create(user)

console.log(tea.email);