"use client"
import Head from 'next/head';

export default function Conference() {
  return (
    <>
      <Head>
        <title>Global Tech Conference on AI Automation | Entrova</title>
      </Head>
      <style jsx global>{`
        html, body { margin: 0; padding: 0; height: 100%; overflow: hidden; }
      `}</style>
      <iframe
        src="/images/conference.html"
        style={{ width: '100%', height: '100vh', border: 'none', display: 'block' }}
        allow="autoplay"
        title="Global Tech Conference on AI Automation"
      />
    </>
  );
}
