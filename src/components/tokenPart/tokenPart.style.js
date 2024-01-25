import styled from "styled-components";

export const TokenPartWrapper = styled.div`
  height: 100%;
  pre {
    background-color: transparent !important;
    border-radius: 10px;
    code {
      color: #fff;
    }
    span {
      &.hljs-number {
        color: #d63aff;
      }
      &.hljs-attr {
        color: #00b9f1;
      }
    }
  }
`;
