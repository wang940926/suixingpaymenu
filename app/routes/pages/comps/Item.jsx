import React from 'react'
import { connect } from 'react-redux'
import styles from './item.scss'
import Content from './Content'

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

let FundPlanPopup = React.createClass({
  componentDidMount() {
  },

  componentWillUnmount() {
  },

  render() {
    let { items } = this.props
    return (
      <div className={styles.depts} >
        <dt className={styles.title}> {items.title}</dt>
       
        <div className={styles.element} >
          {
            items && items.content.map((content, contentkey) => {
              return (<Content content={content} />)
            })
          }
        </div>


      </div>
    )
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(FundPlanPopup)
