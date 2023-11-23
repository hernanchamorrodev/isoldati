import bcrypt from 'bcrypt'

const users = [
    {
        name: 'Admin',
        email: 'admin@test.com',
        password: bcrypt.hashSync('test12345678admin', 10),
        active: true,
        confirm: true
    },
]

export default users