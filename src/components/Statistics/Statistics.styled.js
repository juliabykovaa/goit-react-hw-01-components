import styled from '@emotion/styled';

const randomColor = () => {
  return (
    '#' +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')
      .toUpperCase()
  );
};

export const StatSection = styled.section`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  width: fit-content;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin: 0 auto;
  margin-top: 100px;
`;

export const StatTitle = styled.h2`
  font-size: 35px;
  font-weight: 600;
  display: flex;
  justify-content: center;
`;

export const StatInfo = styled.ul`
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0px;
`;

export const StatItem = styled.li`
  width: 70px;
  background-color: ${randomColor};
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  color: white;
`;

export const StatLabel = styled.span`
  font-size: 18px;
`;

export const StatData = styled.span`
  font-size: 18px;
  font-weight: 600;
`;
