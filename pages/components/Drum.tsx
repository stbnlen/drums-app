import { StyledDrum } from "./Drum.styled";


type Props = {
  drumType: string;
  onClick: () => void;
};

const Drum: React.FC<Props> = ({ drumType, onClick }) => (
  <StyledDrum onClick={onClick}>
    <p>{drumType}</p>
  </StyledDrum>
);

export default Drum;
