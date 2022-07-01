import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  .trails-text {
    position: relative;
    width: 100%;
    height: 80px;
    line-height: 80px;
    color: rgb(66, 61, 63);
    font-size: 5em;
    font-weight: 800;
    will-change: transform, opacity;
    overflow: hidden;
  }

  .trails-text > div {
    overflow: hidden;
  }
`;
