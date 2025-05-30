'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import { createLink } from "./actions";

export default function Home() {

  const [url    , onChangeUrl     ] = useState<string>('')
  const [api_key, onChangeApiKey  ] = useState<string>('')
  const [discord, onChangeDiscord ] = useState<string>('')

  const [info, setInfo] = useState<any>(null)

  const handleSend = async () => {
    let action =  await createLink(url, api_key, discord);


    setInfo(action)

    if(action.status){
      onChangeUrl('')
      onChangeApiKey('')
      onChangeDiscord('')
    }
  }

  return (
    
    <div className={styles.page}>
      <div className={styles.formContainer}>
        <div className={styles.formControl}>
          <label htmlFor="api-key">Digite a chave de API do Discord</label>
          <input
            type="text"
            id="api-key"
            value={api_key}
            onChange={(e) => onChangeApiKey(e.target.value)}
          />
        </div>

        <div className={styles.formControl}>
          <label htmlFor="discord-address">Digite o link do Discord</label>
          <input
            type="text"
            id="discord-address"
            value={discord}
            onChange={(e) => onChangeDiscord(e.target.value)}
          />
        </div>

        <div className={styles.formControl}>
          <label htmlFor="monitoring-address">Digite o link para monitoramento</label>
          <input
            type="text"
            id="monitoring-address"
            value={url}
            onChange={(e) => onChangeUrl(e.target.value)}
          />
        </div>

        <button className={styles.button} onClick={handleSend}>
          Salvar
        </button>
      </div>
    </div>
  );
}
