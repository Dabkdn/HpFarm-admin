import React from 'react'
const axios = require("axios");

class UploadImage extends React.Component {

    constructor(props) {
        super(props);
    }
    onChange = (e) => {
        
        let file = e.target.files[0]
        if (file) {
            const formData = new FormData();
            formData.append(this.props.name, file);
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            };
            axios.post(`${process.env.REACT_APP_SERVER_URL}/api/upload/${this.props.name}`, formData, config)
                .then((response) => {
                    this.props.onImageChange(response.data[0] && response.data[0].path)
                }).catch((error) => {
                });
        }
    }

    render() {
        return (
            <input type="file" name={this.props.name} onChange={this.onChange} />
        )
    }
}

export default UploadImage