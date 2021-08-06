import React from 'react'
import Header from '../component/website/header'
import Footer from '../component/website/footer'


const WebsiteLayout = (props) => {
    return (
        <div>
            <Header {...props} />
            <main>
                <div className="container">
                    {props.children}
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default WebsiteLayout