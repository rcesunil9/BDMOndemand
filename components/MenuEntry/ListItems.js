import React, { Component } from "react";
import { CCol, CRow, CButton } from "@coreui/react";
import { connect } from "react-redux";
import {
  modalOpenRequest,
  modalCloseRequest,
  addCategoriesRequest,
  getCategoriesRequest,
  updateCategoriesRequest,
} from "../../actions";

import Category from "./Menu/Category";
import SubCategory from "./Menu/SubCategory";
import Item from "./Menu/Item";
import Filter from "./Filter";
import FoodType from "./FoodType";
class ListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
      <Filter/>
      <FoodType/>
        <CRow>
          <CCol xs="12" sm="6">
            <Category />
          </CCol>
          <CCol xs="12" sm="6">
            <SubCategory />
          </CCol>
        </CRow>

        <CRow>
          <CCol>
            <Item />
          </CCol>
        </CRow>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  CategorieReducerData: state.CategorieReducer,
  ModalReducer: state.ModalReducer,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onAddCategories: (data) => {
      dispatch(addCategoriesRequest(data));
    },
    getCategoriesDate: (data) => {
      dispatch(getCategoriesRequest(data));
    },
    onUpdateCategories: (data) => {
      dispatch(updateCategoriesRequest(data));
    },
    modalOpenRequest: (data) => {
      dispatch(modalOpenRequest(data));
    },
    modalCloseRequest: (data) => {
      dispatch(modalCloseRequest(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListItems);
