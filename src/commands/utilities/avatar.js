import { EmbedBuilder } from 'discord.js';

export default {
    name: "avatar",
    data: {
        name: "avatar",
        description: "「🔧 Utilities」・Exiba o avatar de um usuário",
        type: 1,
        options: [{
            name: "usuário",
            
        }]
    },
    category: 'Utilities',
    view: true,
    devsOnly: false,
    run: async (client, interaction) => {

    }
}