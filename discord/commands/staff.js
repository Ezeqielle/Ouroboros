// all commands for staff
const Discord = require("discord.js");
const client = new Discord.Client();
global.discordJsClient = client;

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const { createUser } = require("../services/staff_services");

module.exports.singUp = async ({ id }) => {
  try {
    const user = await createUser(id);
    console.log(user);
    const userSignUp = new Discord.MessageEmbed()
      .setColor("#008000")
      .setTitle("Sign Up")
      .addFields({
        inline: true,
        name: "Sign Up",
        value: "account successfully created",
      })
      .setTimestamp()
      .setFooter("boost community");
    return userSignUp;
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
