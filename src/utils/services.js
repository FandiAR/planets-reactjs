import apiClient from './apiClient';

export const getPlanets = async (page) => {
  const params = {};
  params.page = page;
  const result = await apiClient('get', false, params).then(
    ({ data }) => data
  );

  return result;
}