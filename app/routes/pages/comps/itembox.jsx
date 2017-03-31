import React from 'react'
import { connect } from 'react-redux'
import itemboxstyles from './itembox.scss'
import styles from './Tips.scss'
import Item from './Item'

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
    let { itembox } = this.props
    return (
      <div className={itemboxstyles.itembox}>
     <h3> {itembox.title}</h3>
      <hr className={itemboxstyles.hr} />
      <div>
        {
          itembox && itembox.Item.map((item, itemKey) => {
            return (
              <Item items={item} />
            )
          })
        }
      </div>
      </div> 
    )
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(FundPlanPopup)
