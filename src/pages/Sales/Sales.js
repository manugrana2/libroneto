import React, { useState, useRef, useEffect, useReducer } from 'react';
import { useForm } from 'react-hook-form';
import Filter from './Filter/Filter';
import ActiveFilters from './Filter/ActiveFilters';
import Title from './Filter/Title';
import Form from './Filter/Form';
import { SalesList } from '../../parts/SalesList/SalesList';

//Logic to update sales filter dispatch function
function updateFilter(state, action) {
  console.log('updateFilter was called')
  switch (action.type) {
    case 'date-fitler':
      if (action.del) {
        return ({ ...state, date: false });
      }
      return ({ ...state, date: { 'from-date': action.from, 'to-date': action.to } });
    case 'value-filter':
      if (action.del) {
        return ({ ...state, value: false });
      }
      return ({ ...state, value: { 'from-value': action.from, 'to-value': action.to } });
    case 'seller-filter':
      if (action.del) {
        return ({ ...state, seller: false });
      }
      return ({ ...state, seller: { name: action.name, lastname: action.lastname, id: action.id } });
    case 'client-filter':
      if (action.del) {
        return ({ ...state, client: false });
      }
      return ({ ...state, client: { name: action.name, lastname: action.lastname, id: action.id } });
    case 'product-filter':
      if (action.del) {
        return ({ ...state, product: false });
      }
      return ({ ...state, product: { name: action.name, ref: action.ref} });
      case 'state-filter':
        if (action.del) {
          return ({ ...state, state: false });
        }
        return ({ ...state, state:action.state});
    default:
      return ({ ...state });

  }
}

export const Sales = () => {
  const initialFilterState = {};
  const [salesFilter, salesFilterDispatch] = useReducer(updateFilter, initialFilterState) // The hook for the form filter
  React.useEffect(() => {
    document.title = "Ventas - LibroNeto";
  }, []);
  const [showForm, setShowForm] = useState(false);
  const headerRef = useRef(null);

  //Logic to load the data when the filters are modified by the user
  useEffect(() => {
    console.log("Sales filter is now ", salesFilter)
  }, [salesFilter])
  //End of logic to load the data when the filters are modified by the user

  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.textContent = showForm ? 'Registrar Venta' : 'Gestionar Ventas';
    }
  }, [showForm]);

  return (
    <div style={{ marginBottom: '90px' }}>
      <Title showForm={showForm} setShowForm={setShowForm}></Title>
      {!showForm && (
      <>
      <Filter dispatch={salesFilterDispatch}></Filter>
      <ActiveFilters dispatch={salesFilterDispatch} ></ActiveFilters>
      <SalesList></SalesList>
      </>
      )}
      {showForm && (<Form setShowForm={setShowForm}></Form>)}
    </div>
  );
};
