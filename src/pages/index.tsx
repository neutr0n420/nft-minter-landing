import Image from "next/image";
import { Inter } from "next/font/google";
import { Box, Center, Spacer, Stack } from "@chakra-ui/react";
import Head from "next/head";
import styles from "@/styles/Home.module.css"
import Navbar from "@/components/Navbar";
import Disconnected from "@/components/Disconnected";
import Connected from "@/components/Connected";
import { useWallet } from "@solana/wallet-adapter-react";
import RandomBar from "@/components/RandomBar";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { connected } = useWallet()
  return (
    <div className={styles.container}>
      <Head>
        <title className="">Buildoors</title>
        <meta name="The NFT Collection for Buildoors" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        w="full"
        h="calc(100vh)"
        bgImage={"url(/home-background.svg)"}
        backgroundPosition="center"
      >
        <Stack w="full" h="calc(100vh)" justify="center">
          <Navbar />
          {/* <RandomBar /> */}
          <Spacer />
          <Center>
            { /* If connected, the second view, otherwise the first */}
            <Center>{connected ? <Connected /> : <Disconnected />}</Center>
          </Center>
          <Spacer />

        </Stack>
      </Box>
    </div>
  )
}
