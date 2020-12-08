import { RouteComponentProps } from 'react-router';

type NavObject = {
  section: string;
  path: string;
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
};

export default NavObject;
