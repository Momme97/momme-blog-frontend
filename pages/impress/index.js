import Head from 'next/head'
import { Layout } from 'antd';

export default function Impress() {
    const { Content } = Layout;

    return (
        <Content className="content-container" style={{marginTop:20}}>
            <Head>
                <title>Impressum | Momme Ristow</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <h1>Impressum</h1>
            <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
            <p>Momme Ristow<br />
                Amrumring 109<br />
                24107 Kiel</p>

            <h2>Kontakt</h2>
            <p>E-Mail: momme.ristow@web.de</p>

            <h2>Redaktionell verantwortlich</h2>
            <p>Momme Ristow</p>

            <p>Quelle: <a href="https://www.e-recht24.de">eRecht24</a></p>
        </Content>
    )
}