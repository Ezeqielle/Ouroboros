const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

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