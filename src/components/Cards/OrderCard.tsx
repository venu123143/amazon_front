import React from 'react'

const OrderCard: React.FC<any> = ({ order }) => {
    return (
        <div>
            {order?.orderItems[0]?.title}
        </div>
    )
}

export default React.memo(OrderCard)