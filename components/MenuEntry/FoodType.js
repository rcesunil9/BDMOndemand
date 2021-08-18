import React, { Component } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTooltip,
  CBadge,
  CCollapse,
} from "@coreui/react";
import { connect } from "react-redux";
import {
  addFoodTypesRequest,
  getFoodTypesRequest,
  updateFoodTypesRequest,
  addBulkFoodTypesRequest,
  modalOpenRequest,
  modalCloseRequest,
} from "../../actions";
import Loader from "../../containers/Loader/Loader";
import AddFoodTypeModal from "./Modal/AddFoodTypeModal";
import EditFoodTypeModal from "./Modal/EditFoodTypeModal";
import BulkFoodTypeModal from "./Modal/BulkFoodTypeModal ";

class FoodType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      is_deleted: false,
      selectRowFDid: "",
      selectRowClick: 0,
      food_type_id: "",
      show: false,
      openFilterId: "",
      newRow: false,

      updateData: {
        name: "",
        filter_type_id: "",
        is_deleted: false,
      },
    };
  }
  async componentDidMount() {
    this.props.getFoodTypesDate();
  }
  addFoodTypeData = () => {
    const { name, is_deleted, filter_type_id } = this.state;
    let json = {
      name,
      is_deleted,
      filter_type_id,
    };
    this.props.addData(json);
  };

  render() {
    const { newRow, show, is_deleted, name } = this.state;
    return (
      <>
        <CRow>
          <CCol>
            <CCard>
              <CCardHeader className="d-flex  flex-row justify-content-between">
                {" "}
                <h6>
                  <i class="fas fa-list-alt mr-2"></i>List Of FoodTypes
                </h6>
                <div>
                  <CTooltip content="remove FoodType">
                    <CButton
                      className="btn-youtube text-white mr-1"
                      size="sm"
                      onClick={() =>
                        this.setState({
                          newRow: true,
                          show: true,
                        })
                      }
                    >
                      <i class="fas fa-minus text-white" />
                    </CButton>
                  </CTooltip>
                  <CTooltip content="Add New FoodTypes">
                    <CButton
                      className="bg1 text-white"
                      size="sm"
                      onClick={() =>
                        this.setState({
                          newRow: true,
                          show: true,
                        })
                      }
                    >
                      <i class="fas fa-plus text-white" />
                    </CButton>
                  </CTooltip>

                  <CTooltip content="Add Bulk Data">
                    <CButton
                      color="info"
                      size="sm"
                      className="ml-1"
                      // onClick={() =>
                      //   this.props.modalOpenRequest({ bulkFoodTypeModal: true })
                      // }
                    >
                      <i class="fas fa-file-download" />
                    </CButton>
                  </CTooltip>
                  {this.state.show === true ? (
                    <i
                      className="fa fa-angle-down text1 ml-2"
                      onClick={() =>
                        this.setState({
                          show: !show,
                        })
                      }
                    />
                  ) : (
                    <i
                      className="fa fa-angle-right ml-2"
                      aria-hidden="true"
                      onClick={() =>
                        this.setState({
                          show: !show,
                        })
                      }
                    />
                  )}
                </div>
              </CCardHeader>

              <CCollapse show={show}>
                <CCardBody>
                  <div className="table-responsive table1div">
                    <table class="table table-bordered table-sm">
                      <thead>
                        <tr>
                          <th scope="col">S.no</th>
                          <th scope="col">Image</th>
                          <th scope="col">Name</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {newRow ? (
                          <tr>
                            <td></td>
                            <td>
                              <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={(e) =>
                                  this.setState({
                                    [e.target.name]: e.target.value,
                                  })
                                }
                                onBlur={() => this.addFilterData()}
                              />
                            </td>
                            <td>
                              <div className="d-flex flex-row text-center">
                                <CBadge
                                  className={`${
                                    !is_deleted ? "bg1" : "bg-secondary"
                                  } text-white px-1 pt-1 pb-1`}
                                >
                                  Enable
                                </CBadge>

                                <CBadge
                                  className={`${
                                    is_deleted ? "btn-youtube" : "bg-secondary"
                                  } text-white px-1 pt-1 pb-1 ml-1`}
                                >
                                  Disable
                                </CBadge>
                              </div>
                            </td>
                          </tr>
                        ) : null}
                        {this.props.ReducerData &&
                        !this.props.ReducerData.isLoading ? (
                          this.props.ReducerData.data &&
                          this.props.ReducerData.data.length ? (
                            this.props.ReducerData.data.map((item, index) => {
                              return (
                                <tr key={index}>
                                  <td>{index + 1}</td>
                                  <td>
                                    {item.avatar_url ? (
                                      <img
                                        src={item.avatar_url}
                                        className="zoom"
                                      />
                                    ) : null}
                                  </td>
                                  <td>{item.name ? item.name : null}</td>

                                  <td>
                                    <div className="d-flex flex-row justify-content-center mt-3">
                                      <CTooltip content="Change Status">
                                        <CBadge
                                          className={`${
                                            !item.is_deleted
                                              ? "bg1"
                                              : "bg-secondary"
                                          } text-white px-1`}
                                          onClick={() =>
                                            this.props.updateFilterData({
                                              is_deleted: false,
                                              food_type_id: item._id,
                                            })
                                          }
                                        >
                                          Enable
                                        </CBadge>
                                      </CTooltip>
                                      <CTooltip content="Change Status">
                                        <CBadge
                                          className={`${
                                            item.is_deleted
                                              ? "btn-youtube"
                                              : "bg-secondary"
                                          } text-white px-1 ml-1`}
                                          onClick={() =>
                                            this.props.updateFilterData({
                                              is_deleted: true,
                                              food_type_id: item._id,
                                            })
                                          }
                                        >
                                          Disable
                                        </CBadge>
                                      </CTooltip>
                                    </div>
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
              </CCollapse>
            </CCard>
          </CCol>
        </CRow>

        <AddFoodTypeModal
          isShow={this.props.ModalReducer.addFoodTypeModal}
          onClose={() =>
            this.props.modalCloseRequest({ addFoodTypeModal: false })
          }
          onAddFoodTypes={(data) => this.props.onAddFoodTypes(data)}
        />
        {/* <EditFoodTypeModal
          {...props}
          isShow={props.ModalReducer.editFoodTypeModal}
          food_type_id={id}
          onClose={() => props.modalCloseRequest({ editFoodTypeModal: false })}
          onUpdateFoodTypes={(data) => props.onUpdateFoodTypes(data)}
        /> */}
        {/* <BulkFoodTypeModal
        {...props}
        isShow={props.ModalReducer.bulkFoodTypeModal}
        onClose={() => props.modalCloseRequest({ bulkFoodTypeModal: false })}
        onSaveBulkData={(data) => props.onSaveBulkData(data)}
      /> */}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ReducerData: state.FoodTypeReducer,
  ModalReducer: state.ModalReducer,
});
const mapDispatchToProps = (dispatch) => {
  return {
    onAddFoodTypes: (data) => {
      dispatch(addFoodTypesRequest(data));
    },
    onSaveBulkData: (data) => {
      dispatch(addBulkFoodTypesRequest(data));
    },
    getFoodTypesDate: (data) => {
      dispatch(getFoodTypesRequest(data));
    },
    onUpdateFoodTypes: (data) => {
      dispatch(updateFoodTypesRequest(data));
    },
    modalOpenRequest: (data) => {
      dispatch(modalOpenRequest(data));
    },
    modalCloseRequest: (data) => {
      dispatch(modalCloseRequest(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FoodType);
