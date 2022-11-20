import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 6px 12px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  border-radius: 3px;
`;

export const Name = styled.p`
  font-size: 25px;
  font-weight: 500;
  color: black;
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  margin: 0 13px;
`;

export const Online = styled.span`
  height: 18px;
  width: 18px;
  background-color: green;
  border-radius: 50%;
`;

export const Offline = styled.span`
  height: 18px;
  width: 18px;
  background-color: red;
  border-radius: 50%;
`;
