import React from 'react'
import { firebaseClient } from '@/firebase/firebaseClient'
import router from 'next/router'

export const withAuth = (Component: any) => {
  return class AuthComponent extends React.Component {
    constructor(props: any) {
      super(props)
      this.state = {
        status: 'LOADING',
      }
    }
    componentDidMount() {
      firebaseClient.auth().onAuthStateChanged((authUser) => {
        if (authUser) {
          this.setState({
            status: 'SIGNED_IN',
          })
        } else {
          router.push('/')
        }
      })
    }

    renderContent() {
      const { status }: any = this.state
      if (status == 'LOADING') {
        return <h1>Loading ......</h1>
      } else if (status == 'SIGNED_IN') {
        return <Component {...this.props} />
      }
    }

    render() {
      return <>{this.renderContent()}</>
    }
  }
}
