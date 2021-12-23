// for error boundary and class component has to be used
// rcc: react component class
import React from 'react'


export default class SafeComponent extends React.Component {
          // rconst: react constructor
          constructor(props) {
                    super(props)
          
                    this.state = {hasError: false}
          }

          static getDerivedStateFromError(error) {
                    return { hasError: true}
          }

          componentDidCatch() {}
          
          render() {
                    if(this.state.hasError) {
                              return <h1> Something went wrong. </h1>
                    }


                    return this.props.children
          }
}

