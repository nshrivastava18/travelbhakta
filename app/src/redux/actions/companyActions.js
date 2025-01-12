export const updateCompany = (company) => ({
  type: 'UPDATE_COMPANY',
  payload: company,
});

export const addCompany = (company) => ({
  type: 'ADD_COMPANY',
  payload: company,
});

export const deleteCompany = (companyName) => ({
  type: 'DELETE_COMPANY',
  payload: companyName,
});
