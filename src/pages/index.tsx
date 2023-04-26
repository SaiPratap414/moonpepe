import Head from "next/head";
import Image from "next/image";
import { Comfortaa, Inter, Roboto } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import Social from "@/components/Social";
import classNames from "classnames";
import assets from "@/assets";
import Link from "next/link";

const comfortaa = Comfortaa({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <>
      <Head>
        <title>Moon Pepe</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#53a62b" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <div id="home" className={styles.hero} style={{ background: `url(${assets.bg.home.src})` }}>
          <div />
          <Social />
          <a href="http://gamepepe.xyz/" target="_blank">
          <Button className={styles.playnow}>play now</Button>
          </a>
         
        </div>
        <div id="about" className={styles.about}>
          <div>
            <h2>moon pepe</h2>
            <p className={comfortaa.className}>
              We aren’t just another meme coin, we’re building on top of a meme coin.
              <br />
              <br />
              Enough of these shitty coins, they’ve dominated this space and delivered 0 value. We will give our
              community fun games to play and fuck around with this pepe is the only pepe taking you to the moon and
              then to uranus.
            </p>
            <a href="https://app.camelot.exchange/?token2=0xce0b3f1258189da17bbd8c7e0509f5f7e001a998" target="_blank">
            <Button className={styles.buynow}>buy now</Button>
            </a>
          </div>
          <div>
            <h2>about</h2>
            <p className={comfortaa.className}>
              Moon pepe is gaming and gambling meme coin we are building an ecosystem, if you’re watching this you’re
              early Gambling / Games
              <br />
              <br />– we gotchu covered mate
            </p>
          </div>
        </div>
        <div id="howtobuy" className={styles.howtobuy} style={{ background: `url(${assets.bg.howto.src})` }}>
          <h2>how to buy</h2>
          <div className={styles.boxes}>
            <div className={classNames(styles.box, styles.left)}>
              <Image src={assets.howtobuy.one} width={75} height={75} alt="" />
              <div>
                <h4 className={inter.className}>Create a Wallet</h4>
                <p className={comfortaa.className}>
                  Download Metamask or your wallet of choice that supports Arbitrum One. Desktop users, download the
                  google chrome extension by going to metamask.io.
                </p>
              </div>
            </div>
            <div className={classNames(styles.box, styles.right)}>
              <Image src={assets.howtobuy.two} width={70} height={70} alt="" />
              <div>
                <h4 className={inter.className}>Bridge ETH over onto Arbitrum</h4>
                <p className={comfortaa.className}>
                  Have some ETH on L1 / Ethereum Mainnet, swap it on a bridge onto Arbitrum You can also buy ETH on
                  Arbitrum directly on exchanges like Binance and Crypto.com.
                </p>
              </div>
            </div>
            <div className={classNames(styles.box, styles.left)}>
              <Image src={assets.howtobuy.three} width={70} height={70} alt="" />
              <div>
                <h4 className={inter.className}>Purchase $MPEPE using Camelot</h4>
                <p className={comfortaa.className}>
                  Navigate to Camelot and ensure you are on Arbitrum (not L1 / Ethereum Mainnet).
                </p>
              </div>
            </div>
            <div className={classNames(styles.box, styles.right)}>
              <Image src={assets.howtobuy.four} width={180} height={70} alt="" />
              <div>
                <h4 className={inter.className}>Switch ETH for $MPEPE</h4>
                <p className={comfortaa.className}>
                  Swap Eth for MPEPE on the V2 exchange , if the token doesn’t appear copy paste the contract. There is
                  Zero Tax so there is no worry for specific slippage, although you may have to use slippage during
                  market volatility.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="tokenomics" className={styles.tokenomics}>
          <h2>tokenomics</h2>
          <div className={styles.tk}>
            <div>
              <div className={styles.totalSupply}>
                <p className={inter.className}>Total Supply:</p>
                <p className={inter.className}>420,690,000,000</p>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>s.no</th>
                    <th>topic</th>
                    <th>percentage (%)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>camelot liquidity launch</td>
                    <td>20.73</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Marketing and early contributors</td>
                    <td>10%</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Team</td>
                    <td>5%</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Burned forever</td>
                    <td>64.27%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Image src={assets.chart} alt="" />
          </div>
        </div>
        <div
          id="contact"
          className={styles.contact}
          style={{ background: `url(${assets.bg.contact.src})`, backgroundPosition: `50% 0` }}
        >
          <h2>contact</h2>
          <Image src={assets.logo} width={88} height={88} alt="Mpepe Logo" />
          <p className={classNames(comfortaa.className, styles.email)}>email: moonpepe@moonpepe.xyz</p>
          <div className={styles.social}>
            <Link href="https://twitter.com/moonpepe_xyz" target="_blank">
              <Image src={assets.twitter} width={88} height={88} alt="Twitter" />
            </Link>
            <Link href="https://t.me/moonpepearb" target="_blank">
              <Image src={assets.telegram} width={88} height={88} alt="Telegram" />
            </Link>
          </div>
          <div className={styles.disclaimer}>
            <p className={comfortaa.className}>
              $mpepe coin has no association with Matt Furie or his creation Pepe the Frog.
            </p>
            <p className={comfortaa.className}>
              This token is simply paying homage to a meme we all love and recognize.
            </p>
          </div>
        </div>
        <p className={classNames(styles.copyright, roboto.className)}>© 2023 by MPEPE. All rights reserved!</p>
      </main>
    </>
  );
}