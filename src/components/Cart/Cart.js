import React, { Component } from 'react'
import Title from'../Title';
import CartColums from './CartColums';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context';
import CartList from './CartList';
import CarTotals from './CartTotals';

export default class extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value =>{
                        const {cart} = value;
                        if (cart.lenght>0){
                            return(
                                <React.Fragment>
                                    <Title name='your' title='cart'/>
                                    <CartColums />
                                    <CartList value={value}/>
                                    <CartTotals value={value}/>
                                    </React.Fragment>
                            );
                        } else {
                            return <EmptyCart />;
                        }
                    }}
                </ProductConsumer>
            </section>
        );
    }
}
