import React from 'react';
import { connect } from 'react-redux';

class Product extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div className="product-img">
                    <img src="http://bit.ly/2tMBBTd" height="420" width="327" />
                </div>
                <div className="product-info">
                    <div className="product-text">
                        <h1>PRODUCT</h1>
                        <h2>{this.props.product.serial_number}</h2>
                        <h2>{this.props.product.manufacturer}</h2>
                        <h2>{this.props.product.date_of_entry}</h2>
                        <h2>{this.props.product.date_of_expiry}</h2>
                        <h2>{this.props.product.item_Type}</h2>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.product
    }
}

export default connect(mapStateToProps)(Product);