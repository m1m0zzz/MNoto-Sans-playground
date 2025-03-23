'use client'

import { useState } from 'react'

import localFont from 'next/font/local'

import styles from './Main.module.css'

const MNotoSans = localFont({ src: './MNotoSans-alpha-ExtraBold-v2.ttf' })

export function Main() {
  const [text, setText] = useState('Asus4\nC#dim')
  return (
    <main className={styles.main}>
      <div className={styles.previewContainer}>
        <p className={styles.previewHeading}>preview</p>
        <div className={`${MNotoSans.className} ${styles.preview}`}>
          {text.split('\n').map((t, i) =>
            <p key={i}>{t}</p>
          )}
        </div>
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </main>
  )
}