import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <>
      <table className={s.transactionHistory}>
        <thead className={s.tableHead}>
          <tr>
            <th className={s.headColumnType}>Type</th>
            <th className={s.headColumnAmount}>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody className={s.tableBody}>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <tr className={s.bodyRow} key={id}>
                <td className={(s.bodyColumn, s.bodyColumnType)}>{type}</td>
                <td className={s.bodyColumnAmount}>{amount}</td>
                <td>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
