import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCartItemsCount } from '../../redux/cart/cart-selectors'
import { toggleCartHidden } from '../../redux/cart/cart-actions'

import {
    CartIconContainer,
    ShoppingIconContainer,
    ItemCountContainer,
} from './cart-icon.styles'

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingIconContainer className='shopping-icon' />
        <ItemCountContainer className='item-count'>
            {itemCount}
        </ItemCountContainer>
    </CartIconContainer>
)

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount,
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CartIcon)
