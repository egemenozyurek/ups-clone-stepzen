import React, { useEffect, useState } from 'react'
import { useQuery } from "@apollo/client"
import { GET_ORDERS } from '../grapql/queries'

const useCustomerOrders = () => {
    const { loading, error, data} =useQuery(GET_ORDERS)
    const[orders, setOrders] = useState<Order[]>([])

    useEffect(() => {
        if (!data) return;

        const orders: Order[] = data.getOrders.map(({value}: OrderResponse)  => ({
            carrier: value.carrier,
            
        }))
    }, [data])

  return (
    <div>useCustomerOrders</div>
  )
}

export default useCustomerOrders