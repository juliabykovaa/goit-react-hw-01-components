import PropTypes from 'prop-types';

export const TransactionItem = ({ type, amount, currency }) => {
    return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>

    )
}

TransactionItem.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    amont: PropTypes.string,
    currency: PropTypes.string,
}