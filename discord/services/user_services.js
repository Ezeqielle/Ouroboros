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