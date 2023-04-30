import PropTypes from 'prop-types';
import {
  StatSection,
  StatTitle,
  StatInfo,
  StatItem,
  StatData,
  StatLabel,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatSection>
      {title && <StatTitle>{title}</StatTitle>}

      <StatInfo>
        {stats.map(data => {
          return (
            <StatItem key={data.id}>
              <StatLabel>{data.label}</StatLabel>
              <StatData>{data.percentage}</StatData>
            </StatItem>
          );
        })}
      </StatInfo>
    </StatSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
