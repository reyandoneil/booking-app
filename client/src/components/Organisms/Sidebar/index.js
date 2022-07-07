import React from 'react';
import { InputField } from '../../Molecules';
import { Button } from '../../Atoms';
import {
  SidebarWrapper,
  Title,
  InputFieldWrapper,
} from './SidebarElements';

function Sidebar() {
  return (
    <SidebarWrapper>
      <Title>Search</Title>
      <InputFieldWrapper>
        <InputField label={'Destination/property name:'} />
        <InputField label={'Check-in date'} />
        <InputField label={'Check-Out date'} />
      </InputFieldWrapper>
      <Button title={'Search'} className={'sidebar'} />
    </SidebarWrapper>
  );
}

export default Sidebar;
