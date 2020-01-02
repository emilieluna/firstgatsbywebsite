import React from 'react'


class Home extends React.Component {
    constructor () {
        super ();

        this.onClickForward = this.onClickForward.bind(this)

        const img0 = require('./images/firstslide1.JPG');
        const img1 = require('./images/secondslide2.JPG');

        this.state = {
            index: 0,
            imgList: [img0, img1]
        }

    }

    onClickForward() {
        if (this.state.index + 1 === this.state.imgList.length) {
            this.setState({
                index: 0
            })
        } else {
            this.setState({
                index: this.state.index + 1
            })
        }
    }


    render() {
        return (
            <div onClick={this.onClickForward}>
                <img src={this.state.imgList[this.state.index]} alt=""/>
            </div>
        )
    }

}

export default Home 