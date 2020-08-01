// all commands for users
const Discord = require('discord.js');
const client = new Discord.Client();
global.discordJsClient = client;

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports.balance = async ({id}) => {
    const user = await prisma.user.findOne({
        where: {discord_id: id},
    })
    user? console.log(user) : console.log('user not found')

    //const userBalance = new Discord.MessageEmbed()
    //    .setColor('#ead50b')
    //    .setTitle('Balance')
    //    .addFields(
    //        {inline: true, name: 'test', value: '0 **golds**'}
    //    )
    //    .setTimestamp()
    //    .setFooter('boost community');
}