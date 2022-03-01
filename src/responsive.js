import { css } from "styled-components";
export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};
// if we need to write resopnsiveness to all the compoe=nents in the app it will take huge time so we are
// putting all  media quries in a single file  and exporting it to all the necessery files and components
