import React from 'react'
import { addListener, launch } from 'devtools-detector'
import Hotkeys from 'react-hot-keys'

export const WebSecurity: React.FC = () => {
  window.oncontextmenu = () => false

  addListener((isOpen) => {
    if (isOpen) {
      if (window.location.hostname === 'netflix-web.vercel.app') {
        window.open('about:blank', '_self')
        return
      }
    }
  })

  launch()

  /* -------------------------------- variables ------------------------------- */
  const blockKeysForSecurityPurpose =
    'f12,ctrl+shift+i,ctrl+shift+r,ctrl+shift+j,ctrl+shift+c,cmd+opt+i,cmd+opt+j,cmd+alt+i,cmd+alt+j,ctrl+u' // user won't be able to inspect & see source code while pressing these keys

  /* ----------------------------------- jsx ---------------------------------- */

  const onkeydown = (keyName: any, e: any, handle: any) => {
    if (window.location.hostname === 'netflix-web.vercel.app') {
      e.preventDefault()

      return [keyName, handle]
    }
  }

  return (
    <>
      <Hotkeys
        keyName={blockKeysForSecurityPurpose}
        onKeyDown={onkeydown.bind(this)}
      />
    </>
  )
}

export default WebSecurity
