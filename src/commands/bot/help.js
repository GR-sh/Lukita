import { codeBlock } from '@discordjs/builders';
import { MessageEmbed } from 'discord.js';

export default {
    name: "help",
    data: {
        name: "help",
        description: "「💙 Bot」・Acesse minha lista completa de comandos",
        type: 1,
        options: []
    },
    category: 'Bot',
    view: true,
    devsOnly: false,
    run: async (client, interaction) => {
        let botAvatar = client.user.displayAvatarURL({ format: 'png', size: 4096 })

        let embedHelp = new MessageEmbed()
            .setThumbnail(botAvatar)
            .setTitle(`${client.emotes.nothing}${client.emotes.nothing} ・Lista de comandos・ ${client.emotes.nothing}${client.emotes.nothing}`)
            .setDescription(`**${interaction.member.user.tag}** seja bem vindo a minha central de ajuda e help dos meus comandos. Abaixo está todos eles com contagem total separado por categorias, espero que você goste. :wink: \n\n${client.emotes.categBot} › Informações (Bot) \`[ ${client.commands.filter(a => a.category === "Bot").size} ]\` \n${codeBlock(client.commands.filter(a => a.category === "Bot").map(a => a.name).toString().replace(",", " - " ) )}\n${client.emotes.categMod} › Moderação(Mod) \`[ ${client.commands.filter(a => a.category === "Mod").size} ]\`\n${codeBlock(client.commands.filter(a => a.category === "Mod").map(a => a.name).toString().replace(",", " - " ) )}`)
            .setColor(client.pallete.blueBaby)
            .setFooter({text: `Sou um jovem disposto a deixar sua moderação muito mais fácil`, iconURL: client.user.displayAvatarURL({ format: 'png', size: 4096 })})
        interaction.reply({
            embeds: [embedHelp]
        })
    }
}