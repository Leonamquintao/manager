import React, { Component } from 'react';

//components
import Card from './common/Card';
import CardSection from './common/CardSection';
import InputComponent from './common/InputComponent';
import ButtonComponent from './common/ButtonComponent';

export default class LoginForm extends Component<{}> {
  render() {
    return (
      <Card>
        <CardSection>
          <InputComponent
            label="Email"
            placeholder="email@mail.com"
          />
        </CardSection>

        <CardSection>
        <InputComponent
          label="Password"
          secureTextEntry
          placeholder="Password"
        />
        </CardSection>

        <CardSection>
          <ButtonComponent>
            Login
          </ButtonComponent>
        </CardSection>
      </Card>
    );
  }
}
