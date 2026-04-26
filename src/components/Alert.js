import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useTranslation } from 'next-i18next';
import styles from '../styles/Alert.module.css';

const Alert = ({ alerts, showAlert }) => {
  const { t } = useTranslation();

  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map(alert => (
      <div key={alert.id} className={`${styles.alert} ${styles[`alert__${alert.alertType}`]}`}>
        {t(alert.msg)}
      </div>
    ))
  );
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
  //showAlert: PropTypes.func.isRequired // Add the showAlert prop
};

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
