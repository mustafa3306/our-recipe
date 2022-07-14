import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  justify-content: ${({justify}) => justify ? justify : "center"};
`;

export default Flex;
