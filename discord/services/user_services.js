const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports.findUserByDiscId = async (discordId) => {
    const user = await prisma.user.findOne({
        where: {discord_id: discordId}
    })
    if (user)
        return user 
    throw new Error("user not found")
};

module.exports.createUser = async (discordId) => {
    const newUser = await prisma.user.create({
        data: {
            discord_id: discordId,
            blizzard_token: "",
            status: 1,
            characters: [],
            balance: {
                create: {
                    amount: 0
                }
            }
        }
    })
    if (newUser)
        return newUser
    throw new Error("User not created")
};