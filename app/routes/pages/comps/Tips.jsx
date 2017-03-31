import React from 'react'
import {connect} from 'react-redux'
import styles from './Tips.scss'

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

let FundPlanPopup = React.createClass({
  componentDidMount () {
  },

  componentWillUnmount () {
  },

  render () {
    let {text, test} = this.props
    return (
      <div className={styles.title} >
        {text}
      </div>
    )
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(FundPlanPopup)
