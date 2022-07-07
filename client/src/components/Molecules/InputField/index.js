import { Input, Label, InputWrapper } from './InputFieldElements';

function InputCom({
  placeholder,
  type,
  onChange,
  value,
  name,
  label,
}) {
  return (
    <>
      <InputWrapper>
        <Label>{label}</Label>
        <Input
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          value={value}
          name={name}
        />
      </InputWrapper>
    </>
  );
}

export default InputCom;
