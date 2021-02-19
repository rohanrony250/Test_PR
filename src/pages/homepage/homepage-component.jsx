import React from 'react'
import HeaderComponent from '../../components/header-component/header-component'
import  TrendingView  from '../../components/trending-preview/trending-preview.component'


const HomepageComponent = () =>
(
    <div className='homepage'>
        <HeaderComponent/>
        <TrendingView/>
    </div>
)

export default HomepageComponent