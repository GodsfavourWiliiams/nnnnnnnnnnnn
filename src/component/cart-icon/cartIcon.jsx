import React from 'react';
import { ReactComponent as CartLogo } from '../Assets/cart.svg';
import { ReactComponent as Ping } from '../Assets/Ellipse.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selctCartItemsCount, selectCartItems } from '../../redux/cart/cart-selector';

const cartIcon = ({toggleCartHidden, itemCount, cartItem}) => {
    return ( 
        <div className='w-full relative flex items-center justify-center cursor-pointer ' onClick={toggleCartHidden}>
            {itemCount ?
            <Ping className='absolute text-xs animate animate-ping' style={{bottom: "22.5px", left: "11px"}}/>
            :
            <Ping className='absolute text-xs' style={{bottom: "22.9px", left: "11px"}}/>
            }
            <CartLogo />
            <span className='absolute text-xs text-green-700 font-bold hidden md:block' style={{top: "9.5px", left: "8px"}}>{itemCount <= 9 ? "0" : '' }{itemCount}</span>
            <span className='absolute block md:hidden text-xs text-green-700 font-bold' style={{top: "9.5px", left: "6.5px"}}>{itemCount <= 9 ? "0" : '' }{itemCount}</span>
            <span className='ml-3 -mb-1 relative '>Cart</span>
        </div>
    )
}


const mapStateToProps = state => ({
    itemCount: selctCartItemsCount(state),
    cartItem: selectCartItems(state)

});
 
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})


export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(cartIcon);