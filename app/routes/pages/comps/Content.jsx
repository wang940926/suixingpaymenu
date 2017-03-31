import React from 'react'
import {connect} from 'react-redux'
import styles from './Content.scss'

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onmouse:(vle)=>{
      alert(vle.onMouseOver)

      }
   
  }
}

let FundPlanPopup = React.createClass({
  componentDidMount () {
  },

  componentWillUnmount () {
  },

  render () {
    let {content} = this.props
    return (
      <a className={styles.title} href={content.url}>
        {content.title}
        {content.isNew?<i className="styles.title.i">NEW</i>:null }
      </a>
    )
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(FundPlanPopup)
