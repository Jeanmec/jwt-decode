import styled from "styled-components";

export const TokenPartWrapper = styled.div`
  height: 100%;
  pre {
    background-color: transparent !important;
    border-radius: 10px;
    color: white;
    .string {
      color: #d63aff;
    }
    .number {
      color: #d63aff;
    }
    .boolean {
      color: blue;
    }
    .null {
      color: magenta;
    }
    .key {
      color: #00b9f1;
    }
  }
`;
