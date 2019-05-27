import React, { useState } from 'react'
import firebase from 'config/firebase'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import tw from 'tailwind.macro'
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
    await firebase.firestore().collection('products').doc('1productaweek').collection('subscribers').doc(formData.email).set({
      ...formData,
      product: '1productaweek',
      date: new Date(),
    })
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
      <input
        type='email'
        value={formData.email || ''}
        onChange={updateFormValue(setFormData, formData, 'email')}
        style={{ border: '1px solid #cbd5e0' }} css={styles.input} placeholder='E-mail' />
      <button onClick={onSubscribe} style={{ top: -2 }} css={styles.btn}>Subscribe</button>
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
    
    bg-white 
    focus:outline-none
    focus:shadow-outline 
    border border-gray-400 
    rounded
    py-1 
    px-4 
    inline-block
    w-full
    max-w-xs
    text-base
    appearance-none 
    leading-normal
    shadow-none
  `,
  btn: tw`
    relative

    cursor-pointer
    inline-block
    bg-gray-700
    hover:bg-gray-800
    text-xs
    text-white 
    font-bold 
    py-2
    px-4 
    rounded
    border
    border-transparent
    border-solid
    select-none
  `,
}
