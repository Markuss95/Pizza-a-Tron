import React, { useEffect } from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import {
  orderState,
  startSetOrdersFromDatabase,
} from "../modules/configurator/redux/orders/actions"

const OrderHistoryComponent = ({ orders, startSetOrdersFromDatabase }) => {
  console.log(orders)
  useEffect(() => {
    startSetOrdersFromDatabase()
  }, [])
  return (
    <Wrapper>
      <table>
        <thead>
          <tr className="header">
            <th>Order ID</th>
            <th>Status</th>
            <th>Date</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order: orderState) => {
            return (
              <tr key={order.id}>
                <th>{order.id}</th>
                <th>Done</th>
                <th>{order.date}</th>
                <th>
                  {order.orderPrice.toLocaleString("en", {
                    useGrouping: false,
                    minimumFractionDigits: 2,
                  })}{" "}
                  $
                </th>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Wrapper>
  )
}

const mapStateToProps = state => {
  return {
    orders: state.orders,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    startSetOrdersFromDatabase: () => dispatch(startSetOrdersFromDatabase()),
  }
}

const Wrapper = styled.div`
  table {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-collapse: collapse;
    width: 50rem;

    border: 1px solid #bdc3c7;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2),
      -1px -1px 8px rgba(0, 0, 0, 0.2);
  }
  tr {
    transition: all 0.2s ease-in;
    cursor: pointer;
  }
  tbody {
    tr:hover {
      background-color: #f5f5f5;
      transform: scale(1);
      box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2),
        -1px -1px 8px rgba(0, 0, 0, 0.2);
    }
  }
  th,
  td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  .header {
    background-color: #b95de4;
    color: #fff;
  }
`
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderHistoryComponent)
