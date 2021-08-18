import React, { Component } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CTooltip,
  CBadge,
} from "@coreui/react";
import { connect } from "react-redux";
import {
  modalOpenRequest,
  modalCloseRequest,
  addCategoriesRequest,
  getCategoriesRequest,
  updateCategoriesRequest,
} from "../../../actions";
import Loader from "../../../containers/Loader/Loader";
class ListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addCategory: false,
      name: "",
      description: "",
      is_deleted: false,
      selectRowCid: "",
      updateCategoryData: {},
    };
  }
  componentDidMount() {
    this.props.getCategoriesDate();
  }
  componentDidUpdate({ ItemReducerData }) {
    if (
      ItemReducerData &&
      ItemReducerData.data &&
      this.props.ItemReducerData &&
      this.props.ItemReducerData.data &&
      this.props.ItemReducerData.data !== ItemReducerData.data
    ) {
      let data = this.props.ItemReducerData.data.filter(
        (item) => item.name === this.state.name
      )[0];
      let updateCategoryData = {
        name: data && data.name ? data.name : "",
        is_deleted: data && data.is_deleted ? data.is_deleted : false,
        description: data && data.description ? data.description : "",
      };

      this.setState({
        addCategory: false,
        name: "",
        is_deleted: false,
        description: "",
        selectRowCid: data && data._id,
        updateCategoryData,
      });
    }
  }
  render() {
    const {
      addCategory,
      name,
      description,
      is_deleted,
      selectRowCid,
      updateCategoryData,
    } = this.state;
    const { ItemReducerData } = this.props;
    return (
      <>
        <CCard>
          <CCardHeader className="d-flex  flex-row justify-content-between">
            {" "}
            <h6>
              <i class="fas fa-list-alt mr-2"></i>List Of Item
            </h6>
            <div>
              <CButton
                className="bg1 text-white"
                size="sm"
                onClick={() =>
                  this.setState({
                    addCategory: true,
                    selectRowCid: "",
                    name: "",
                    description: "",
                    is_deleted: false,
                  })
                }
              >
                <i class="fas fa-plus" />
              </CButton>

              <CButton className="bg-danger text-white ml-2" size="sm">
                <i class="fas fa-minus" />
              </CButton>
            </div>
          </CCardHeader>
          <CCardBody>
            <div className="table-responsive table1div">
              <table class="table table-bordered table-sm">
                <thead className="table1header">
                  <tr>
                    <th scope="col">Item name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Category</th>
                    <th scope="col">Sub Category</th>
                    <th scope="col"> Allergy</th>
                    <th scope="col">Calories</th>
                    <th scope="col">Spice Level</th>
                    <th scope="col">Food Type</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <>
                    {addCategory ? (
                      <tr>
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
                            onBlur={() => {
                              this.props.onAddCategories({
                                name,
                                description,
                                is_deleted,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="description"
                            onChange={(e) =>
                              this.setState({
                                [e.target.name]: e.target.value,
                              })
                            }
                            onBlur={() => {
                              this.props.onAddCategories({
                                name,
                                description,
                                is_deleted,
                              });
                            }}
                          />
                        </td>
                        <td>
                          <div className="d-flex flex-row">
                            <CBadge className="bg1 text-white px-1 pt-1 pb-1">
                              Enable
                            </CBadge>

                            <CBadge className="btn-youtube text-white px-1 pt-1 pb-1 ml-1">
                              Disable
                            </CBadge>
                          </div>
                        </td>
                      </tr>
                    ) : null}
                    {ItemReducerData && !ItemReducerData.isLoading ? (
                      ItemReducerData.data && ItemReducerData.data.length ? (
                        ItemReducerData.data.map((item, index) => {
                          return (
                            <tr
                              key={index}
                              onClick={() =>
                                this.setState({
                                  selectRowCid: item._id,
                                  addCategory: false,
                                  updateCategoryData: {
                                    name: item.name ? item.name : "",
                                    description: item.description
                                      ? item.description
                                      : "",
                                    is_deleted: item.is_deleted
                                      ? item.is_deleted
                                      : false,
                                  },
                                })
                              }
                            >
                              <td>
                                {selectRowCid === item._id ? (
                                  <input
                                    type="text"
                                    name="name"
                                    value={updateCategoryData.name}
                                    onChange={(e) =>
                                      this.setState({
                                        updateCategoryData: {
                                          ...updateCategoryData,
                                          [e.target.name]: e.target.value,
                                        },
                                      })
                                    }
                                    onBlur={() => {
                                      this.props.onUpdateCategories({
                                        ...updateCategoryData,
                                        cId: selectRowCid,
                                      });
                                    }}
                                  />
                                ) : item.name ? (
                                  item.name
                                ) : null}
                              </td>

                              <td>
                                {" "}
                                {selectRowCid === item._id ? (
                                  <input
                                    type="text"
                                    name="description"
                                    value={updateCategoryData.description}
                                    onChange={(e) =>
                                      this.setState({
                                        updateCategoryData: {
                                          ...updateCategoryData,
                                          [e.target.name]: e.target.value,
                                        },
                                      })
                                    }
                                    onBlur={() => {
                                      this.props.onUpdateCategories({
                                        ...updateCategoryData,
                                        cId: selectRowCid,
                                      });
                                    }}
                                  />
                                ) : (
                                  item.description
                                )}
                              </td>
                              <td>
                                <CTooltip content="Change Status">
                                  <CBadge
                                    className="bg1 text-white px-1"
                                    // onClick={() => activateUsers(item)}
                                  >
                                    Active
                                  </CBadge>
                                </CTooltip>

                                <CTooltip content="Change Status">
                                  <CBadge
                                    className="btn-youtube text-white px-1 ml-1"
                                    // onClick={() => inActivateUsers(item)}
                                  >
                                    Inactive
                                  </CBadge>
                                </CTooltip>
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <tr>
                          <td colspan="9">
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
                        <td colspan="9">
                          <Loader />
                        </td>
                      </tr>
                    )}
                  </>
                </tbody>
              </table>
            </div>
          </CCardBody>
        </CCard>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  ItemReducerData: state.ItemsReducer,
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
