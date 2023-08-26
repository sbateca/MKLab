import { Layout, LayoutProps } from 'react-admin';
import { CustomBar } from './molecules/CustomBar';
import { CustomMenu } from './molecules/CustomMenu';

export const MicrolabLayout = (props: LayoutProps) => (
    <Layout {...props} appBar={CustomBar} menu={CustomMenu} />
);