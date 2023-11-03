import styled from "styled-components"

const StyledOrder = styled.div`
    margin: 10px 0;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
    display: flex;
    gap: 20px;
    time{
        font-size: 1rem;
        color: #555;
    }
`;
const ProductRow = styled.div`
    span{
        color: #aaa;
    }
`;
const Address = styled.div`
    font-size: 0.8rem;
    line-height: 1rem;
    margin-top: 5px;
    color: #777;
`;

export default function SingleOrder({ line_items, createdAt, ...rest }) {
    return (
        <StyledOrder>
            <div>
                <time>{(new Date(createdAt)).toLocaleString()}</time>
                <Address>
                    {rest.name}<br />
                    {rest.email}<br />
                    {rest.streetAddress}<br />
                    {rest.city}<br />
                    {rest.country}, {rest.postalCode}
                </Address>
            </div>
            <div>
                {line_items.map(item => (
                    <ProductRow key={item.price_data.product_data.name}>
                        <span>{item.quantity} x </span>
                        {item.price_data.product_data.name}
                    </ProductRow>
                ))}
            </div>
        </StyledOrder>
    );
}