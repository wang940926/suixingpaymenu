import React from 'react'
import {connect} from 'react-redux'
import styles from './Home.scss'
import Tips from './comps/Tips'
import Itembox from './comps/itembox'
import websiteConfig from '../config/websiteUrl'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

let FundPlanPopup = React.createClass({

  render () {
    return (
      <div className={styles.mainBox}>
        <Tips text='欢迎来到随行付网址导航，整合了随行付常用的一些网址，希望能给各位带来一点点的便利。更多精彩内容，期待您来一起添加！'/>
        {
          websiteConfig && websiteConfig.ItemBox.map((itemBox, itemBoxKey)=>{
            return (
                 <Itembox itembox={itemBox}/>
            )
          })
        }
      </div>
    )
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(FundPlanPopup)
