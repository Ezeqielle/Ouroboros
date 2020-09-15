// all commands for users
const Discord = require("discord.js");
const client = new Discord.Client();
global.discordJsClient = client;

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const { findUserByDiscId } = require("../services/user_services");
const { findBalanceByUserId } = require("../services/balance_service");

module.exports.balance = async ({ id }) => {
  try {
    const user = await findUserByDiscId(id);
    const balance = await findBalanceByUserId(user.id);
    console.log(balance);

    const userBalance = new Discord.MessageEmbed()
      .setColor("#ead50b")
      .setTitle("Balance")
      .addFields({
        inline: true,
        name: "balance",
        value: `**${balance.amount}** golds`,
      })
      .setTimestamp()
      .setFooter("boost community");

    return userBalance;
  } catch (error) {
    console.log(error.message);

    const userBalance = new Discord.MessageEmbed()
      .setColor("#FF0000")
      .setTitle("Balance")
      .addFields({ inline: true, name: "Error", value: error.message })
      .setTimestamp()
      .setFooter("boost community");

    return userBalance;
  }
};

module.exports.singUp = async ({ id }) => {
  try {
    const user = await createUser(id);
    console.log(user);
    const userSignUp = new Discord.MessageEmbed()
      .setColor("#008000")
      .setTitle("Sign Up")
      .addFields({ inline: true, name: "Sign Up", value: "account successfully created" })
      .setTimestamp()
      .setFooter("boost community");
  } catch (error) {
    const userSignUp = new Discord.MessageEmbed()
      .setColor("#FF0000")
      .setTitle("Sign Up")
      .addFields({ inline: true, name: "Error", value: error.message })
      .setTimestamp()
      .setFooter("boost community");

    return userSignUp;
  }
};
