import { ButtonTitle, ButtonWrapper } from './ButtonElements';

function Button({ title, className, ss, onClick,}) {
  return (
    <>
      <ButtonWrapper
        className={className}
        ss={ss}
        onClick={onClick}

      >
        <ButtonTitle className={className}>{title}</ButtonTitle>
      </ButtonWrapper>
    </>
  );
}

export default Button;
