import React, { Component } from "react";
import {
  CCol,
  CRow,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CTooltip,
  CBadge,
  CCollapse,
} from "@coreui/react";
import { ConfirmBox } from "../../Helpers/SweetAlert";
import AddModal from "./Modal/AddFilterTypeModal";
import Loader from "../../containers/Loader/Loader";
import { connect } from "react-redux";
import {
  modalOpenRequest,
  modalCloseRequest,
  addFilterTypeRequest,
  getFilterTypeRequest,
  addFilterDataRequest,
  updateFilterDataRequest,
  addBulkFilterDataRequest,
  updateFilterRequest,
} from "../../actions";
import BulkFilter from "./ModalData/BulkFilter";
class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      is_deleted: false,
      selectRowFDid: "",
      selectRowClick: 0,
      filter_type_id: "",
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
    this.props.getFilterTypeDate();
  }
  componentDidUpdate({ FilterTypeData }) {
    if (
      FilterTypeData &&
      FilterTypeData.updateReq &&
      this.props.FilterTypeData &&
      this.props.FilterTypeData.updateReq &&
      this.props.FilterTypeData.updateReq !== FilterTypeData.updateReq
    ) {
      this.setState({
        filter_type_id: "",
        newRow: false,
        name: "",
        updateData: {
          name: "",
          filter_type_id: "",
          is_deleted: false,
        },
        selectRowClick: this.state.newRow ? 2 : 1,
      });
    }
  }

  addFilterData = () => {
    const { name, is_deleted, filter_type_id } = this.state;
    let json = {
      name,
      is_deleted,
      filter_type_id,
    };
    this.props.addData(json);
  };

  onRowClick = (data, id) => {
    const { selectRowFDid, selectRowClick, updateData } = this.state;
    const { _id, name, is_deleted } = data;
    this.setState({
      updateData:
        selectRowFDid === _id
          ? updateData
          : { name: name, is_deleted: is_deleted, filter_type_id: id },
      selectRowFDid: _id,
      selectRowClick: selectRowFDid === _id ? selectRowClick + 1 : 1,
    });
  };
  onUpdateData = () => {
    const { updateData, selectRowFDid } = this.state;
    this.props.updateFilterData({ ...updateData, FDId: selectRowFDid });
  };

  activateFilterType = async (id) => {
    const { value } = await ConfirmBox({
      text: "Do you want to Enable status ?",
    });
    if (value) {
      let json = {
        is_deleted: false,
        filter_type_id: id,
      };

      this.props.updateFilterRequest(json);
    }
  };
  inActivateFilterType = async (id) => {
    const { value } = await ConfirmBox({
      text: "Do you want to Disable status ?",
    });
    if (value) {
      let json = {
        is_deleted: true,
        filter_type_id: id,
      };
      this.props.updateFilterRequest(json);
    }
  };

  deleteFilterType = async (id) => {
    const { value } = await ConfirmBox({
      text: "Do you want to Remove ?",
    });
    if (value) {
      let json = {
        is_removed: true,
        filter_type_id: id,
      };
      this.props.updateFilterRequest(json);
    }
  };
  render() {
    const { FilterTypeData } = this.props;

    const {
      name,
      description,
      is_deleted,
      selectRowFDid,
      updateData,
      selectRowClick,
      filter_type_id,
      openFilterId,
      newRow,
      show,
    } = this.state;
    return (
      <>
        <CRow>
          <CCol
            xs="12"
            sm="12"
            className="d-flex justify-content-end"
            style={{ marginTop: "-20px" }}
          >
            <CButton
              className="bg1 text-white mb-2"
              size="sm"
              onClick={() =>
                this.props.modalOpenRequest({ addAllergyModalOpen: true })
              }
            >
              <i class="fas fa-plus mr-1" /> Add New Filter
            </CButton>
          </CCol>

          {FilterTypeData.data && FilterTypeData.data.length
            ? FilterTypeData.data.map((item, index) => {
                return (
                  <CCol xs="12" sm="6">
                    <CCard>
                      <CCardHeader className="d-flex flex-row justify-content-between">
                        {" "}
                        <h6>
                          <i class="fas fa-list-alt mr-2"></i>List Of{" "}
                          {item.name}
                        </h6>
                        <div>
                          <CTooltip content={`Delete ${item.name}`}>
                            <CButton
                              className="btn-youtube"
                              size="sm"
                              onClick={() => {
                                this.deleteFilterType(item._id);
                              }}
                            >
                              <i class="fas fa-trash-alt text-white"></i>
                            </CButton>
                          </CTooltip>

                          <CTooltip content="Change Status">
                            <CButton
                              className={`${
                                !item.is_deleted ? "bg1" : "btn-youtube"
                              } text-white ml-2`}
                              size="sm"
                              onClick={() => {
                                item.is_deleted
                                  ? this.activateFilterType(item._id)
                                  : this.inActivateFilterType(item._id);
                              }}
                            >
                              {item.is_deleted ? (
                                <i class="fas fa-ban text-white"></i>
                              ) : (
                                <i class="fas fa-ban text-white"></i>
                              )}
                            </CButton>
                          </CTooltip>
                          <CTooltip content="remove">
                            <CButton
                              className="btn-youtube text-white ml-2"
                              size="sm"
                            >
                              <i class="fas fa-minus text-white" />
                            </CButton>
                          </CTooltip>
                          <CTooltip content="Add New">
                            <CButton
                              className="bg1 text-white ml-2"
                              size="sm"
                              onClick={() => {
                                this.setState({
                                  filter_type_id: item._id,
                                  newRow: true,
                                  show: true,
                                  openFilterId: item._id,
                                });
                              }}
                            >
                              <i class="fas fa-plus" />
                            </CButton>
                          </CTooltip>
                          <CTooltip content="Add Bulk">
                            <CButton
                              color="info"
                              size="sm"
                              className="ml-2"
                              onClick={() => {
                                this.setState({
                                  filter_type_id: item._id,
                                });
                                this.props.modalOpenRequest({
                                  BulkFilterData: true,
                                });
                              }}
                            >
                              <i class="fas fa-file-download"></i>
                            </CButton>
                          </CTooltip>

                          {this.state.show === true  && openFilterId===item._id ? (
                            <CTooltip content="expanded">
                              <i
                                className="fa fa-angle-down text1 ml-2"
                                onClick={() =>
                                  this.setState({
                                    show: false,
                                    openFilterId: "",
                                  })
                                }
                              />
                            </CTooltip>
                          ) : (
                            <i
                              className="fa fa-angle-right ml-2"
                              aria-hidden="true"
                              onClick={() =>
                                this.setState({
                                  show: true,
                                  openFilterId: item._id,
                                })
                              }
                            />
                          )}
                        </div>
                      </CCardHeader>

                      <CCollapse
                        show={show && openFilterId === item._id ? true : false}
                      >
                        <CCardBody>
                          <div className="table-responsive table1div">
                            <table className="table table-bordered table-sm">
                              <thead className="table1header">
                                <tr>
                                  <th scope="col">S.no</th>
                                  <th scope="col">Name</th>
                                  <th scope="col">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {newRow && filter_type_id === item._id ? (
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
                                            is_deleted
                                              ? "btn-youtube"
                                              : "bg-secondary"
                                          } text-white px-1 pt-1 pb-1 ml-1`}
                                        >
                                          Disable
                                        </CBadge>
                                      </div>
                                    </td>
                                  </tr>
                                ) : null}
                                {item.filter_data && item.filter_data.length ? (
                                  item.filter_data.map((itm, ind) => {
                                    return (
                                      <tr
                                        key={ind}
                                        className="w-100"
                                        onClick={() =>
                                          this.onRowClick(itm, item._id)
                                        }
                                      >
                                        <td className="w-25">{ind + 1}</td>
                                        <td className="w-25">
                                          {selectRowFDid === itm._id &&
                                          selectRowClick > 1 ? (
                                            <input
                                              className="w-100"
                                              type="text"
                                              name="name"
                                              value={updateData.name}
                                              onChange={(e) =>
                                                this.setState({
                                                  updateData: {
                                                    ...updateData,
                                                    [e.target.name]:
                                                      e.target.value,
                                                  },
                                                })
                                              }
                                              onBlur={() => this.onUpdateData()}
                                            />
                                          ) : itm.name ? (
                                            itm.name
                                          ) : null}
                                        </td>

                                        <td className="w-50">
                                          <div className="d-flex flex-row justify-content-center">
                                            <CTooltip content="Change Status">
                                              <CBadge
                                                className={`${
                                                  !itm.is_deleted
                                                    ? "bg1"
                                                    : "bg-secondary"
                                                } text-white px-1`}
                                                onClick={() =>
                                                  this.props.updateFilterData({
                                                    is_deleted: false,
                                                    FDId: selectRowFDid,
                                                    filter_type_id: item._id,
                                                  })
                                                }
                                              >
                                                Enable
                                              </CBadge>
                                            </CTooltip>
                                            <CTooltip content="Change Status">
                                              <CBadge
                                                className={`${
                                                  itm.is_deleted
                                                    ? "btn-youtube"
                                                    : "bg-secondary"
                                                } text-white px-1 ml-1`}
                                                onClick={() =>
                                                  this.props.updateFilterData({
                                                    is_deleted: true,
                                                    FDId: selectRowFDid,
                                                    filter_type_id: item._id,
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
                                      <h6>
                                        {" "}
                                        <i class="fas fa-exclamation-triangle text-danger mr-2" />
                                        Not Found
                                      </h6>
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
                );
              })
            : null}
        </CRow>
        <AddModal
          isShow={this.props.ModalReducer.addAllergyModalOpen}
          onClose={() =>
            this.props.modalCloseRequest({ addAllergyModalOpen: false })
          }
          addFilterData={(data) => this.props.addFilterData(data)}
        />
        <BulkFilter
          isShow={this.props.ModalReducer.BulkFilterData}
          onClose={() =>
            this.props.modalCloseRequest({ BulkFilterData: false })
          }
          onsaveBulk={(data) => this.props.onsaveBulk(data)}
          filter_type_id={filter_type_id}
        />
        ;
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ModalReducer: state.ModalReducer,
  FilterTypeData: state.FilterTypeReducer,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addFilterData: (data) => {
      dispatch(addFilterTypeRequest(data));
    },
    addData: (data) => {
      dispatch(addFilterDataRequest(data));
    },
    onsaveBulk: (data) => {
      dispatch(addBulkFilterDataRequest(data));
    },
    updateFilterData: (data) => {
      dispatch(updateFilterDataRequest(data));
    },
    updateFilterRequest: (data) => {
      dispatch(updateFilterRequest(data));
    },
    getFilterTypeDate: (data) => {
      dispatch(getFilterTypeRequest(data));
    },
    modalOpenRequest: (data) => {
      dispatch(modalOpenRequest(data));
    },
    modalCloseRequest: (data) => {
      dispatch(modalCloseRequest(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
