import {
  ErrorMessageContainer,
  Message,
} from './ErrorMEssageElements';

function ErrorMEssage({ message, ss, className }) {
  return (
    <ErrorMessageContainer ss={ss} className={className}>
      <Message className={className}>{message}</Message>
    </ErrorMessageContainer>
  );
}

export default ErrorMEssage;
