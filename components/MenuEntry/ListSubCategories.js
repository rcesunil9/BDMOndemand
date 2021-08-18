import React, { useState, useEffect } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CInput,
  CTooltip,
  CInputGroup,
  CBadge
} from "@coreui/react";


import { connect } from "react-redux";
import {
  getSubCategoriesRequest,
  updateSubCategoriesRequest,
  addSubCategoriesRequest,
  getCategoriesRequest,
  modalCloseRequest,
  modalOpenRequest,
} from "../../actions";

import { ConfirmBox } from "../../Helpers/SweetAlert";
import Loader from "../../containers/Loader/Loader";
import AddSubCategoryModal from "./Modal/addSubCategoryModal";
import EditSubCategoryModal from "./Modal/EditSubCategoryModal";

const ListSubCategories = (props) => {
  const [id, setCategoriesId] = useState("");

  useEffect(() => {
    props.getCategoriesDate();
    props.getSubCategoriesDate();
  }, []);

  const activateUsers = async (data) => {
    const { value } = await ConfirmBox({
      text: "Do you want to Inactive status ?",
    });
    if (value) {
      let json = {
        name: data.name,
        description: data.description,
        is_deleted: true,
        category_id:data.category_id,
        sub_category_id: data._id,
      };
      props.onUpdateCategories(json);
    }
  };
  const inActivateUsers = async (data) => {
    const { value } = await ConfirmBox({
      text: "Do you want to Active status ?",
    });
    if (value) {
      let json = {
        name: data.name,
        description: data.description,
        is_deleted: false,
        cId: data._id,
      };
      props.onUpdateCategories(json);
    }
  };
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader className="d-flex flex-row justify-content-between">
              {" "}
              <h6>
                <i class="fas fa-list-alt mr-2"></i>List Of Sub Categories
              </h6>
              <div>
                <CTooltip content="Add New Sub Categories">
                  <CButton
                    className="bg1 text-white"
                    size="sm"
                    onClick={() =>
                      props.modalOpenRequest({ addSubCategoryModalOpen: true })
                    }
                  >
                    <i class="fas fa-plus mr-1 text-white" /> Add New
                  </CButton>
                </CTooltip>

                <CTooltip content="Add Bulk Category">
                  <CButton
                    color="info"
                    size="sm"
                    className="ml-2"
                    // onClick={() =>
                    //   props.modalOpenRequest({ bulkCategoryModalOpen: true })
                    // }
                  >
                    <i class="fas fa-plus mr-1 text-white" />
                    Add Bulk
                  </CButton>
                </CTooltip>
              </div>
            </CCardHeader>
            <CCardBody>
              <div className="d-flex flex-row justify-content-between">
                <span></span>
                <CInputGroup className="w-25 mb-1">
                  <CInput
                    type="text"
                    name="email"
                    // value={auth.email}
                    placeholder="Search..."
                    autoComplete="email"
                    // onChange={(e) => handleChange(e)}
                  />
                  <CButton size="sm" className="bg-primary btn-brand ml-2">
                    <i class="fas fa-search" />
                  </CButton>
                </CInputGroup>
              </div>

              <table class="table table-bordered table-sm">
                <thead>
                  <tr>
                    <th scope="col">S.no</th>
                    <th scope="col">Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Description</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {props.subCategorieReducerData &&
                  !props.subCategorieReducerData.isLoading ? (
                    props.subCategorieReducerData.data &&
                    props.subCategorieReducerData.data.length ? (
                      props.subCategorieReducerData.data.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name ? item.name : null}</td>
                            <td>
                              {item.category_name ? item.category_name : null}
                            </td>
                            <td>
                              {item.description ? item.description : null}
                            </td>
                            <td>
                              {!item.is_deleted ? (
                                <CTooltip content="Change Status">
                                  <CBadge
                                    className="bg1 text-white px-1 pt-1 pb-1"
                                    onClick={() => activateUsers(item)}
                                  >
                                    Active
                                  </CBadge>
                                </CTooltip>
                              ) : (
                                <CTooltip content="Change Status">
                                  <CBadge
                                    className="btn-youtube text-white px-1 pt-1 pb-1"
                                    onClick={() => inActivateUsers(item)}
                                  >
                                    Inactive
                                  </CBadge>
                                </CTooltip>
                              )}
                            </td>
                            <td>
                              <CTooltip content="Edit Sub Categories">
                                <CButton
                                  size="sm"
                                  className="bg1 btn-brand mr-1 mb-1"
                                  onClick={() => {
                                    props.modalOpenRequest({
                                      editSubCategoryModalOpen: true,
                                    });
                                    setCategoriesId(item._id);
                                  }}
                                >
                                  <i class="fas fa-edit text-white" />
                                </CButton>
                              </CTooltip>
                              <CTooltip content="Delete Sub Categories">
                                <CButton
                                  size="sm"
                                  className="btn-youtube btn-brand mr-1 mb-1"
                                >
                                  <i class="fas fa-trash-alt" />
                                </CButton>
                              </CTooltip>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td colspan="6">
                          <h1>Not Found</h1>
                        </td>
                      </tr>
                    )
                  ) : (
                    <tr>
                      <td colspan="6">
                        <Loader />
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <AddSubCategoryModal
        isShow={props.modalReducer.addSubCategoryModalOpen}
        onClose={() =>
          props.modalCloseRequest({ addSubCategoryModalOpen: false })
        }
        categorieReducerData={props.categorieReducerData}
        onAddCategories={(data) => props.onAddCategories(data)}
      />
      <EditSubCategoryModal
        {...props}
        isShow={props.modalReducer.editSubCategoryModalOpen}
        sub_category_id={id}
        onClose={() =>
          props.modalCloseRequest({ editSubCategoryModalOpen: false })
        }
        onUpdateCategories={(data) => props.onUpdateCategories(data)}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  subCategorieReducerData: state.SubCategorieReducer,
  categorieReducerData: state.CategorieReducer,
  modalReducer: state.ModalReducer,
});
const mapDispatchToProps = (dispatch) => {
  return {
    onAddCategories: (data) => {
      dispatch(addSubCategoriesRequest(data));
    },
    getCategoriesDate: (data) => {
      dispatch(getCategoriesRequest(data));
    },
    getSubCategoriesDate: (data) => {
      dispatch(getSubCategoriesRequest(data));
    },
    onUpdateCategories: (data) => {
      dispatch(updateSubCategoriesRequest(data));
    },
    modalOpenRequest: (data) => {
      dispatch(modalOpenRequest(data));
    },
    modalCloseRequest: (data) => {
      dispatch(modalCloseRequest(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListSubCategories);
