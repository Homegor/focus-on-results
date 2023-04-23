import React from 'react'

import brands from '../../src/api/brands.json'
import products from '../../src/api/products.json'

import Filter from './filter'
import Product from './product'

const ProductList = () => {
    return (
        <div className='row'>
            <div className='col-6 col-md-4'>
                <Filter />
            </div>
            <div className='col-md-8'>
                <div className={'row row-cols-2 row-cols-lg-3 g-2 g-lg-3'}>
                    {products.map((item) => (
                        <Product key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductList
