import * as React from 'react';
import styles from './Dashboard.module.scss';
import { IDashboardProps } from './IDashboardProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import { WrappedRequestFormForm } from './request-form/RequestForm';

export default class Dashboard extends React.Component<IDashboardProps, {}> {
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
        <LocaleProvider locale={enUS}>
          <WrappedRequestFormForm description='Hi, this is my first component' />
        </LocaleProvider>
      </div>
    );
  }
}
