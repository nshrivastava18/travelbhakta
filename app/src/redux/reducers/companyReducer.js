const initialState = {
  data: [
    {
      col1: 'Company A',
      col2: 'Address A',
      col3: '1234567890',
    },
    {
      col1: 'Company B',
      col2: 'Address B',
      col3: '0987654321',
    },
    // Add more rows as needed
  ],
};

const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_COMPANY':
      return {
        ...state,
        data: state.data.map(company =>
          company.col1 === action.payload.col1 ? action.payload : company
        ),
      };
    case 'ADD_COMPANY':
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case 'DELETE_COMPANY':
      return {
        ...state,
        data: state.data.filter(company => company.col1 !== action.payload),
      };
    default:
      return state;
  }
};

export default companyReducer;
