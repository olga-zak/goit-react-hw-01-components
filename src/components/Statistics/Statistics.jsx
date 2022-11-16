import PropTypes from 'prop-types';

export const Statistics = ({ stats, title }) => {
  return (
    <>
      <section className="statistics">
        {title && <h2 className="title">{title}</h2>}
        <ul className="stat-list">
          {stats.map(({ id, label, percentage }) => {
            return (
              <li className="item" key={id}>
                <span className="label">{label}</span>
                <span className="percentage">{percentage}</span>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

Statistics.propTypes = {
  //stats: PropTypes.array.isRequired //пропс - это массив
  stats: PropTypes.arrayOf(PropTypes.object).isRequired, //пропс - это массив объектов
  title: PropTypes.string,
};
