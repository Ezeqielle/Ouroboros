// all commands for test
const Discord = require("discord.js");
const client = new Discord.Client();
global.discordJsClient = client;

module.exports.userid = async (mention) => {
  try {
    const matches = mention.match(/^<@!?(\d+)>$/);
    if (!matches) throw new Error("Invalid arguments");
    const id = matches[1];
    const idEmbed = new Discord.MessageEmbed()
      .setColor("#ead50b")
      .setTitle("User ID")
      .addFields({
        inline: true,
        name: "User ID",
        value: id,
      })
      .setTimestamp()
      .setFooter("boost community");

    return idEmbed;
  } catch (error) {
    const idEmbed = new Discord.MessageEmbed()
      .setColor("#FF0000")
      .setTitle("User ID")
      .addFields({ inline: true, name: "Error", value: error.message })
      .setTimestamp()
      .setFooter("boost community");

    return idEmbed;
  }
};
