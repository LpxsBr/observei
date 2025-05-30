export default new class Discord{

    async send(webhook: string, status: number){

        fetch(webhook, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.API_TOKEN}`
            },
            body: JSON.stringify({
                content: "Observei - Monitoramento de Serviços",
                embeds: [
                    {
                        title: "Verificação do cliente",
                        description: "[monitoramento]",
                        url: "",
                        color: 9366496,
                        timestamp: new Date(),
                        footer: {
                        icon_url: "",
                        text: "" + new Date().toDateString() + "",
                        },
                        thumbnail: {
                        url: "",
                        },
                        author: {
                        name: "Monitor",
                        url: "",
                        icon_url: "",
                        },
                        fields: [
                        {
                            name: "🖥️ Link",
                            value: "...",
                        },
                        {
                            name:     "📊 Status",
                            value:    "200"
                        },
                        ],
                    },
                ],
            }),
            cache: 'no-store'
        })

    }

}