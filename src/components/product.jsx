import React from 'react'

const Product = (props) => {
    const { title, sku, prise, img, brand } = props
    return (
        <div className='col'>
            <div className='p-3 border bg-light'>
                <h2>{title}</h2>
                <p>{sku}</p>
                {prise.map((item) => (
                    <p>{item.value}</p>
                ))}
            </div>
        </div>
    )
}

export default Product
