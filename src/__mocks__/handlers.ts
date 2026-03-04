import {
  getAccountsMock,
  getAppointmentsMock,
  getAuthMock,
  getHealthMock,
  getProfessionalsMock,
} from '../api/http/routes/index.msw';

export const handlers = () => [
  ...getProfessionalsMock(),
  ...getAccountsMock(),
  ...getAuthMock(),
  ...getHealthMock(),
  ...getAppointmentsMock(),
];
