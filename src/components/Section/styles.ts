import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 82px 0 82px;

  .trails-text {
    width: 100%;
    color: rgb(66, 61, 63);
    font-size: 2em;
    font-weight: 800;
    will-change: transform, opacity;
    overflow: hidden;
  }

  .trails-text > div {
    overflow: hidden;
  }
`;
