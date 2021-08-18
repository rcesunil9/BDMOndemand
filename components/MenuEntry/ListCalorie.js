import React, { useState, useEffect } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTooltip,
  CBadge
} from "@coreui/react";
import { connect } from "react-redux";
import {
  getCalorieRequest,
  updateCalorieRequest,
  addBulkCalorieRequest,
  modalOpenRequest,
  modalCloseRequest,
  addCalorieRequest,
} from "../../actions";
import Loader from "../../containers/Loader/Loader";
import AddCalorieModal from "./Modal/addCalorieModal";
import EditCalorieModal from "./Modal/EditCalorieModal";
import BulkCalorieModal from "./Modal/BulkCalorieModal";
import { ConfirmBox } from "../../Helpers/SweetAlert";
const ListCalorie = (props) => {
  const [id, setId] = useState("");

  useEffect(() => {
    props.getListCalorieDate();
  }, []);

  const DisablesCalories = async (data) => {
    const { value } = await ConfirmBox({
      text: `Do You Want To Disable This Calories ${data.name} ?`,
    });
    if (value) {
      let json = {
        name: data.name,
        is_deleted: true,
        calorie_id: data._id,
      };
      props.onUpdateCalorie(json);
    }
  };
  const EnableCalories = async (data) => {
    const { value } = await ConfirmBox({
      text: `Do You Want To Enable This Calories  ${data.name} ?`,
    });
    if (value) {
      let json = {
        name: data.name,
        is_deleted: false,
        calorie_id: data._id,
      };
      props.onUpdateCalorie(json);
    }
  };
  return (
    <>
      <CCard>
        <CCardHeader className="d-flex  flex-row justify-content-between">
          {" "}
          <h6>
            <i class="fas fa-list-alt mr-2"></i>List Of Calories
          </h6>
          <div>
            <CTooltip content="Add New Categories">
              <CButton
                className="bg1 text-white"
                size="sm"
                onClick={() =>
                  props.modalOpenRequest({ addCalorieModalOpen: true })
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
                  props.modalOpenRequest({ bulkCalorieModalOpen: true })
                }
              >
                <i class="fas fa-plus mr-1" />
                Add Bulk
              </CButton>
            </CTooltip>
          </div>
        </CCardHeader>
        <CCardBody>
          <div className="table-responsive table1div">
            <table class="table table-bordered table-sm">
              <thead className="table1header">
                <tr>
                  <th scope="col">no</th>
                  <th scope="col">Name</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {props.CaloriesReducerData &&
                !props.CaloriesReducerData.isLoading ? (
                  props.CaloriesReducerData.data &&
                  props.CaloriesReducerData.data.length ? (
                    props.CaloriesReducerData.data.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{item.name ? item.name : null}</td>

                          <td>
                            {!item.is_deleted ? (
                              <CTooltip content="Change Status">
                                <CBadge
                                  className="bg1 text-white px-1 pt-1 pb-1"
                                  onClick={() => DisablesCalories(item)}
                                >
                                  Enable
                                </CBadge>
                              </CTooltip>
                            ) : (
                              <CTooltip content="Change Status">
                                <CBadge
                                  className="btn-youtube text-white px-1 pt-1 pb-1"
                                  onClick={() => EnableCalories(item)}
                                >
                                  Disable
                                </CBadge>
                              </CTooltip>
                            )}
                          </td>
                          <td>
                            <CTooltip content="Edit Categories">
                              <CButton
                                size="sm"
                                className="bg1 text-white btn-brand mr-1 mb-1"
                                onClick={() => {
                                  setId(item._id);
                                  props.modalOpenRequest({
                                    editCalorieModalOpen: true,
                                  });
                                }}
                              >
                                <i class="fas fa-edit" />
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
                        <h6>
                          {" "}
                          <i class="fas fa-exclamation-triangle text-danger mr-2" />
                          Not Found
                        </h6>
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

      <AddCalorieModal
        {...props}
        isShow={props.ModalReducer.addCalorieModalOpen}
        onClose={() => props.modalCloseRequest({ addCalorieModalOpen: false })}
        onAddCalories={(data) => props.onAddCalories(data)}
      />
      <EditCalorieModal
        {...props}
        isShow={props.ModalReducer.editCalorieModalOpen}
        calorie_id={id}
        onClose={() => props.modalCloseRequest({ editCalorieModalOpen: false })}
        onUpdateCalorie={(data) => props.onUpdateCalorie(data)}
      />
      
    </>
  );
};

const mapStateToProps = (state) => ({
  CaloriesReducerData: state.CaloriesReducer,
  ModalReducer: state.ModalReducer,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onAddCalories: (data) => {
      dispatch(addCalorieRequest(data));
    },
    onsaveBulk: (data) => {
      dispatch(addBulkCalorieRequest(data));
    },
    getListCalorieDate: (data) => {
      dispatch(getCalorieRequest(data));
    },
    onUpdateCalorie: (data) => {
      dispatch(updateCalorieRequest(data));
    },
    modalOpenRequest: (data) => {
      dispatch(modalOpenRequest(data));
    },
    modalCloseRequest: (data) => {
      dispatch(modalCloseRequest(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListCalorie);
