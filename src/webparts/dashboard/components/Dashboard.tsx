import * as React from 'react';
import { escape } from '@microsoft/sp-lodash-subset';

import { WrappedRequestFormForm } from './request-form/RequestForm';

import styles from './Dashboard.module.scss';
import { IDashboardProps } from './IDashboardProps';
import DataGrid from '../../../components/data-grid';
import RootHOC from '../../../components/root-hoc/Root';

class Dashboard extends React.Component<IDashboardProps, {}> {
  public render(): React.ReactElement<IDashboardProps> {
    return (
      <div>
        <div className={styles.dashboard}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.column}>
                <span className={styles.title}>Welcome to SharePoint!</span>
                <p className={styles.subTitle}>
                  Customize SharePoint experiences using Web Parts.
                </p>
                <p className={styles.description}>
                  {escape(this.props.description)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <WrappedRequestFormForm description='Hi, this is my first component' />
        <DataGrid data={[]} columns={[]}/>
      </div>
    );
  }
}

export default RootHOC(Dashboard);
