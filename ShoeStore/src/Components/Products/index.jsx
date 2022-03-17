import React from 'react';
import { ProductsContainer, ProductWrapper, ProductsHeading, ProductTitle, ProductCard, ProductImg, ProductInfo, ProductDesc, ProductPrice, ProductButton } from './ProductsElements';

const Products = ({ heading, data }) => {
    return (
        <div>
            <ProductsContainer>
                <ProductsHeading>{heading}</ProductsHeading>
                <ProductWrapper>
                    {data.map((product, index) => {
                        return (
                            <ProductCard key={index}>
                                <ProductImg src={product.img} alt={product.alt} />
                                <ProductInfo>
                                    <ProductTitle>{product.name}</ProductTitle>
                                    <ProductDesc>{product.desc}</ProductDesc>
                                    <ProductPrice>{product.price}</ProductPrice>
                                    <ProductButton id='rzp-button1'>{product.button}</ProductButton>
                                </ProductInfo>
                            </ProductCard>
                        )

                    })}

                </ProductWrapper>
            </ProductsContainer>


        </div>
    )
}

export default Products
