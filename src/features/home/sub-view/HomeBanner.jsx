import React from "react"
import "./_HomeBanner.scss"

class HomeBanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="home-banner">
                <div className='home-banner-container'>
                    <div className='home-banner-content'>
                        <h1>HpFarm</h1>
                        <h2>Vietnamese agricultural producs at your fingertips</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeBanner;