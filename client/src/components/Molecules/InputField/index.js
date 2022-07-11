import { Input, Label, InputWrapper } from './InputFieldElements';

function InputCom({
  placeholder,
  type,
  onChange,
  value,
  name,
  label,
  defaultValue,
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
          defaultValue={defaultValue}
        />
      </InputWrapper>
    </>
  );
}

export default InputCom;
