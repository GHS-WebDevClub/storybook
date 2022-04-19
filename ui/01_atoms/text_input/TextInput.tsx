import styled from "styled-components";

/**
 * Primary UI component for user text input...
 *
 * Created by Aubin Spitzer according to Issue #12
 * https://github.com/aubincspitzer/wdc-storybook/issues/12
 *
 */

export const TextInput = styled.input<{ error?: boolean }>`
  height: 2.5rem;
  width: 100%;
  max-width: 20rem;
  background: #3a3a3c;
  color: #c7c7cc;
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 0 1rem;
  border: 1px solid ${(props) => props.error ? "#FF3B44" : "#3a3a3c"};
  transition: 300ms;

  :focus {
    background: #1c1c1e;
    border: 1px solid ${(props) => props.error ? "#FF3B44" : "#f2f2f7"};
  }
`;
