// import generateId from "../../utils/generate/index.js"

const data = {
    user: [{
            _id: 1,
            firstName: 'Rafael',
            lastName: 'Cassiano',
            email: 'rafael30011@gmail.com',
            wallets: [{
                _id: 90,
                name: 'Nubank',
                category: 'Banco',
                value: 400,
                icon: '/images/icon.png',
                bills: [{
                        _id: 1,
                        value: 300,
                        category: 'jogo',
                        data: Date.now(),
                        installment: 3,
                        tags: ['Fifa'],
                        obs: '',
                    },
                    {
                        _id: 21,
                        value: 100,
                        category: 'jogo',
                        data: Date.now(),
                        installment: 3,
                        tags: ['Gta v'],
                        obs: '',
                    }
                ],
            }],
            goals: [{
                _id: 1,
                name: 'PC',
                goal: 6000,
                value: 0,
            }]
        },
        {
            _id: 2,
            firstName: 'Joao',
            lastName: 'Cassiano',
            email: 'rafael30011@gmail.com',
            wallets: [{
                _id: 2,
                name: 'itau',
                category: 'Banco',
                value: 400,
                icon: '/images/icon.png',
                bills: [{
                        _id: 1,
                        value: 300,
                        category: 'jogo',
                        data: Date.now(),
                        installment: 3,
                        tags: ['Fifa'],
                        obs: '',
                    },
                    {
                        _id: 21,
                        value: 100,
                        category: 'jogo',
                        data: Date.now(),
                        installment: 3,
                        tags: ['Gta v'],
                        obs: '',
                    }
                ],
            }, ],
            goals: [{
                _id: 1,
                name: 'PC',
                goal: 6000,
                value: 0,
            }]
        }
    ],

    get: () => {
        const userList = data.user
        return [...userList]
    },

    getByid: (id) => {
        if (!id) return 'nao passou id'
        const userList = data.get()
        const user = userList.find(user => user._id === id)
        return user
    },

    delete: (id) => {
        const userList = data.get()
        const newUserList = userList.filter(user => user._id !== id)

        data.user = newUserList
    },
    walletList: (id) => {
        const user = data.getByid(id)
        const walletList = [...user.wallets]

        return walletList
    },

    createWallet: (id, wallet) => {
        const userList = data.get()
        const newUserList = userList.reduce((acc, user) => {
            const newUser = {
                ...user,
                wallets: [...user.wallets, {...wallet, _id: generateId() }]
            }
            if (user._id !== id) return [...acc, user]
            return [...acc, newUser]

        }, [])

        data.userList = newUserList


        return newUserList
    },

    getBills: (walletId) => {
        const userList = data.get()
        const user = userList.find(user => {
            return user.wallets.some(wallet => wallet._id = walletId)
        })
        const wallet = user.wallets.find(wallet => wallet._id === walletId)

        return wallet.bills
    },

    createGoals: (id, goals) => {

    }




}

export default data