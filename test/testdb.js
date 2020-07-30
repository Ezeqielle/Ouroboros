const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


module.exports.signUp = async function({id}){
    const newUser = await prisma.user.create({
        data: {
            discord_id: id,
        },
    })
    console.log(newUser)
}

