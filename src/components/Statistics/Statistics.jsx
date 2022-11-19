import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export const Statistics = ({ stats, title }) => {
  return (
    <>
      <section className={s.statistics}>
        {title && <h2 className={s.title}>{title}</h2>}
        <ul className={s.statList}>
          {stats.map(({ id, label, percentage }) => {
            return (
              <li
                className={s.item}
                key={id}
                style={{
                  backgroundColor: `#${Math.floor(
                    Math.random() * 16777215
                  ).toString(16)}`,
                }}
              >
                <span className={s.label}>{label}</span>
                <span className={s.percentage}>{percentage}%</span>
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
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired, //пропс - это массив объектов, в каждом объекте 3 свойства
  title: PropTypes.string,
};
