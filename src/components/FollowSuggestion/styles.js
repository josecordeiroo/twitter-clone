import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  background: var(--secondary);
  border-radius: 14px;
  padding: 20px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border-top: 1px solid var(--outline);
  }
`;

export const Avatar = styled.div`
  width: 49px;
  height: 49px;
  background-color: var(--gray);
  border-radius: 50%;
  margin-right: 10px;
`;
export const Info = styled.div`
  display: flex;
  /* flex-direction: column; */

  > strong {
    font-size: 14px;
  }

  > span {
    font-size: 14px;
    color: var(--gray);
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 5px;

  > strong {
    font-size: 14px;
  }

  > span {
    font-size: 14px;
    color: var(--gray);
  }
`;

export const FollowButton = styled.div`
  background: var(--secondary);
  color: var(--twitter);
  border: 1px solid var(--twitter);

  padding: 6px 17px;
  border-radius: 25px;

  font-weight: bold;
  font-size: 15px;

  cursor: pointer;
  outline: 0;

  &:hover {
    opacity: 0.75;
  }

  @media (min-width: 320px) {
    top: 10px;
    padding: 10px 19px;
    font-size: 15px;
  }
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 19px;
`;
