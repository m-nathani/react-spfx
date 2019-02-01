import * as React from 'react';

import { IAuthorizationProps, IAuthorizationState } from './IAuthorization';
import Unauthorized from '../unauthorized/Unauthorized';
import { auth } from '../../services';

const withAuthorization = <P extends object>(Component: React.ComponentClass<any>) =>
  class withAuthorization extends React.Component<P & IAuthorizationProps, IAuthorizationState> {
    public readonly state: IAuthorizationState = {
      isAuthorized: false,
      verifying: true,
    };

    constructor(props: P & IAuthorizationProps) {
      super(props);
    }

    public onInitialize() {
      const isAlreadyAuthorized = auth.isAlreadyAuthorized();
      if (isAlreadyAuthorized) {
        this.setState({
          isAuthorized: true,
          verifying: false,
        });
      }
    }

    public render(): React.ReactElement<P & IAuthorizationProps> {
      const { ...props } = this.props as IAuthorizationProps;
      const { isAuthorized } = this.state;
      return isAuthorized ? <Component {...props} /> : <Unauthorized />;
    }
  };

export default withAuthorization;
