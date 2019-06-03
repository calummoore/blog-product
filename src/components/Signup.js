import React, { useState } from 'react'
import firebase from 'config/firebase'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import tw from 'tailwind.macro'
import Input from './base/Input'
import Button from './base/Button'
import Profile from './Profile'

const updateFormValue = (setFormData, formData, prop) => (e) => setFormData({ ...formData, [prop]: e.target.value })

export default function Signup ({ forceShow, title = <span>Hello <span role='img' aria-label='wave'>👋</span></span> }) {
  const [formData, setFormData] = useState({})
  const [subscribed, setSubscribed] = useState(false)

  let localStorage = null
  if (typeof window !== 'undefined') {
    localStorage = window && window.localStorage
  }

  const onSubscribe = async (e) => {
    e.preventDefault()
    await firebase.firestore().collection('subscribers').add({
      ...formData,
      product: '1productaweek',
      date: new Date(),
    }).catch((e) => alert(e.message))
    if (localStorage) localStorage.setItem('1productaweek.signup', 'true')
    setSubscribed(true)
  }

  if (subscribed) return <h6 css={tw`mt-2 font-bold text-lg`}>Thank you for subscribing!</h6>

  if (!forceShow && localStorage && localStorage.getItem('1productaweek.signup') === 'true') return null

  return (
    <div css={styles.box}>
      <Profile style={{ float: 'right', margin: '15px' }} />
      <h6 css={tw`mt-2 font-bold text-lg`}>{title}</h6>
      <p css={tw`my-3 text-gray-700`}>
        I’m Calum - I’m a fellow maker and I’ve challenged myself to launch 1 product every week (
        <a rel='noopener noreferrer' target='_blank' href='https://twitter.com/1productaweek'>@1productaweek</a>).
        <Link to='./why-one-product-a-week'> Find out why!?</Link></p>
      <Input
        type='email'
        value={formData.email || ''}
        onChange={updateFormValue(setFormData, formData, 'email')}
        css={styles.input}
        placeholder='E-mail' />
      <Button onClick={onSubscribe} style={{ top: -2 }} css={styles.btn}>Subscribe</Button>
    </div>
  )
}

const styles = {
  box: css`
    ${tw`
      font-sans 
      rounded
      p-4
    `}
    background: #FAFAFA;
    border: 1px solid #DFDFDF;
  `,
  input: tw`
    mt-2
    mb-2
    mr-2
  `,
  btn: tw`
    relative
  `,
}
