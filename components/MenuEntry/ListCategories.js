import React, { useState, useEffect } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTooltip,
  CBadge,
} from "@coreui/react";
import { connect } from "react-redux";
import { ConfirmBox } from "../../Helpers/SweetAlert";
import {
  addCategoriesRequest,
  getCategoriesRequest,
  updateCategoriesRequest,
  addBulkCategoriesRequest,
  modalOpenRequest,
  modalCloseRequest,
} from "../../actions";
import Loader from "../../containers/Loader/Loader";
import AddCategoryModal from "./Modal/addCategoryModal";
import EditCategoryModal from "./Modal/editCategoryModal";
import BulkCategoryModal from "./Modal/BulkCategoryModal";

const ListCategories = (props) => {
  const [id, setCategoriesId] = useState("");
  useEffect(() => {
    props.getCategoriesDate();
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
        cId: data._id,
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
            <CCardHeader className="d-flex  flex-row justify-content-between">
              {" "}
              <h6>
                <i class="fas fa-list-alt mr-2"></i>List Of Categories
              </h6>
              <div>
                <CTooltip content="Add New Categories">
                  <CButton
                     className ="bg1 text-white"
                    size="sm"
                    onClick={() =>
                      props.modalOpenRequest({ addCategoryModalOpen: true })
                    }
                  >
                    <i class="fas fa-plus mr-1" /> Add New
                  </CButton>
                </CTooltip>

                <CTooltip content="Add Bulk Category">
                  <CButton
                    color="info"
                    size="sm"
                    className="ml-2"
                    onClick={() =>
                      props.modalOpenRequest({ bulkCategoryModalOpen: true })
                    }
                  >
                    <i class="fas fa-plus mr-1" />
                    Add Bulk
                  </CButton>
                </CTooltip>
              </div>
            </CCardHeader>
            <CCardBody>
              <div className="table-responsive">
                <table class="table table-bordered table-sm">
                  <thead>
                    <tr>
                      <th scope="col">no</th>
                      <th scope="col">Name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.CategorieReducerData &&
                    !props.CategorieReducerData.isLoading ? (
                      props.CategorieReducerData.data &&
                      props.CategorieReducerData.data.length ? (
                        props.CategorieReducerData.data.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{item.name ? item.name : null}</td>
                              <td>
                                {item.description ? item.description : null}
                              </td>
                              <td>
                                {!item.is_deleted ? (
                                  <CTooltip content="Change Status">
                                    <CBadge
                                      className ="bg1 text-white px-1 pt-1 pb-1"
                                      onClick={() => activateUsers(item)}
                                    >
                                      Active
                                    </CBadge>
                                  </CTooltip>
                                ) : (
                                  <CTooltip content="Change Status">
                                    <CBadge
                                      className ="btn-youtube text-white px-1 pt-1 pb-1"
                                      onClick={() => inActivateUsers(item)}
                                    >
                                      Inactive
                                    </CBadge>
                                  </CTooltip>
                                )}
                              </td>
                              <td>
                                <CTooltip content="Edit Categories">
                                  <CButton
                                    size="sm"
                                    className="bg1 btn-brand mr-1 mb-1"
                                    onClick={() => {
                                      setCategoriesId(item._id);
                                      props.modalOpenRequest({
                                        editCategoryModalOpen: true,
                                      });
                                    }}
                                  >
                                    <i class="fas fa-edit text-white" />
                                  </CButton>
                                </CTooltip>
                                <CTooltip content="Delete Categories">
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
                          <td colspan="5">
                            <h1>Not Found</h1>
                          </td>
                        </tr>
                      )
                    ) : (
                      <tr>
                        <td colspan="5">
                          <Loader />
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <AddCategoryModal
        {...props}
        isShow={props.ModalReducer.addCategoryModalOpen}
        onClose={() => props.modalCloseRequest({ addCategoryModalOpen: false })}
        onAddCategories={(data) => props.onAddCategories(data)}
      />
      <EditCategoryModal
        {...props}
        isShow={props.ModalReducer.editCategoryModalOpen}
        cId={id}
        onClose={() =>
          props.modalCloseRequest({ editCategoryModalOpen: false })
        }
        onUpdateCategories={(data) => props.onUpdateCategories(data)}
      />
      <BulkCategoryModal
        {...props}
        isShow={props.ModalReducer.bulkCategoryModalOpen}
        onClose={() =>
          props.modalCloseRequest({ bulkCategoryModalOpen: false })
        }
        onSaveBulkData={(data) => props.onSaveBulkData(data)}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  CategorieReducerData: state.CategorieReducer,
  ModalReducer: state.ModalReducer,
});
const mapDispatchToProps = (dispatch) => {
  return {
    onAddCategories: (data) => {
      dispatch(addCategoriesRequest(data));
    },
    onSaveBulkData: (data) => {
      dispatch(addBulkCategoriesRequest(data));
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
export default connect(mapStateToProps, mapDispatchToProps)(ListCategories);
