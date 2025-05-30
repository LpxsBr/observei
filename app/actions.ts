'use server'

import connection from "@/lib/mongodb"
import Link from "@/models/Link";

export async function createLink(url: string, api_key: string, discord: string): Promise<any> {
    try {
        await connection();
        Link.create({
            url,
            api_key,
            discord
        })

        return {
            status: true,
            message: 'sucesso',
        }

    } catch (error) {
        return {
            status: false,
            message: 'falha ao gravar'
        }

    }
}