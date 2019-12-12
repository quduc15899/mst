import React, { Component } from 'react';
import { Redirect} from 'react-router-dom';
import QRCode from 'qrcode.react';

class QRResult extends Component {
    
    constructor(props) {
        super(props);
        const token = localStorage.getItem("token");
        let loggedIn = true;
        if (token === null) {
            loggedIn = false;
        }
        this.state = {
            loggedIn
        }
       
   
    }
    render() {
        const dataQr = JSON.parse(localStorage.getItem("dataQr"));
        
        if (this.state.loggedIn === false) {
            return <Redirect to="/login" />;
            
        }
        return (
            <div className="wrapper text-center">
                <div className="container-fluid">
                    <QRCode
                        id='qrcode'
                        value={dataQr.class}
                        size={500}
                        level={'H'}
                        includeMargin={true}
                    />
                </div>
            </div>

        );
    }
}

export default QRResult;