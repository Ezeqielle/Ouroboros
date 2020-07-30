const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


module.exports.signUp = async ({id}) => {
    const newUser = await prisma.user.create({
        data: {
            discord_id: id,
        },
    })
    console.log(newUser)
}

module.exports.findUserByDiscId = async ({id}) => {
    const user = await prisma.user.findOne({
        where: {discord_id: id},
    })
    user? console.log(user) : console.log('user not found')
}
