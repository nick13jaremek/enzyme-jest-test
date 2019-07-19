export const ALERT_CREATED = 'ALERT_CREATED';

export const createAlert = (message) => {
  return { type: ALERT_CREATED, data: message };
};

