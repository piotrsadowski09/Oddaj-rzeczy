import React from 'react'



class AboutUs extends React.Component {

    
    render() {
        return (
            <div id="aboutUs" className={"aboutUs_container"}>
                <p className={"aboutUs_title"}>O nas</p>
                <div className={"decor"}></div>
                <p className={"aboutUs_text"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nibh imperdiet, mollis metus sit amet, ornare quam. Sed malesuada tincidunt sapien.</p>
                <div className={"aboutUs_image"}>Photo of people</div>
            </div>
        )
    }
}

export default AboutUs;