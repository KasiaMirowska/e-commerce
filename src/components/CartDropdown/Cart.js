import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import './Cart.styles.scss';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    cartItems: state.cart.cartItems,
});

const Cart = (props) => {
    const cartItems = props.cartItems.map(item => (
        <CartItem key={item.id} {...item} />
    ));

    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems}
                <CustomButton>GO TO CHECKOUT</CustomButton>
            </div> 
        </div>
    );

};

export default connect(mapStateToProps)(Cart);