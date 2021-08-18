import React, { useState } from "react";
import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CForm,
  CInput,
  CFormGroup,
  CLabel,
  CFormText,
  CInputCheckbox,
  CTooltip
} from "@coreui/react";

import CIcon from "@coreui/icons-react";
const usersData = [
  {
    s_no: "1",
    heading_title: "nnnnnnnn",
    description: "yyyfffffffffffffff",
    Offer_title: "nadddd",
    status: "Active",
    action: "delete",
  },
];

const handelSubmit = () => {
  // props.onLogin();
};

const getBadge = (status) => {
  switch (status) {
    case "Active":
      return "success";
    case "Inactive":
      return "secondary";
    case "Pending":
      return "warning";
    case "Banned":
      return "danger";
    default:
      return "primary";
  }
};
const fields = [
  "s_no",
  "heading_title",
  "Offer_title",
  "description",
  "status",
  "action",
];

const OfferPopup = () => {
  const [success, setSuccess] = useState(false);
  const [success1, setSuccess1] = useState(false);
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader className="d-flex  flex-row justify-content-between">
              {" "}
              <h6><i class="fas fa-list-alt mr-2"></i>Home Page Pop-up</h6>
              <CButton
                color="success"
                className="d-flex justify-content-end"
                size="sm"
                onClick={() => setSuccess1(!success1)}
              >
                <i class="fas fa-plus mr-1" /> Add New
              </CButton>
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={usersData}
                fields={fields}
                hover
                striped
                bordered
                size="sm"
                itemsPerPage={10}
                pagination
                scopedSlots={{
                  status: (item) => (
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  ),
                }}
                scopedSlots={{
                  action: (item) => (
                    <td>
                      <CTooltip content="Delete ">
                        <CButton
                          size="sm"
                          className="btn-youtube btn-brand mr-1 mb-1"
                        >
                          <i class="fas fa-trash-alt" />
                        </CButton>
                      </CTooltip>

                      <CTooltip content="Edit Offer Pop-up">
                        <CButton
                          size="sm"
                          className="bg-success btn-brand mr-1 mb-1"
                          onClick={() => setSuccess(!success)}
                        >
                          <i class="fas fa-edit" />
                        </CButton>
                      </CTooltip>
                    </td>
                  ),
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CModal
        show={success}
        onClose={() => setSuccess(!success)}
        color="success"
      >
        <CModalHeader closeButton>
          <CModalTitle>Edit Offer</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm action="" method="post" className="form-horizontal">
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="hf-email">Heading Title</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput
                  type="text"
                  id="hf-email"
                  name="hf-email"
                  placeholder="Heading Title..."
                />
                <CFormText className="help-block">
                  Please enter heading title
                </CFormText>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="hf-email">Offer Title</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput
                  type="text"
                  id="hf-email"
                  name="hf-email"
                  placeholder="Offer Title..."
                />
                <CFormText className="help-block">
                  Please enter offer title
                </CFormText>
              </CCol>
            </CFormGroup>

            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="hf-password">Details</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput
                  type="text"
                  id="hf-password"
                  name="hf-password"
                  placeholder="Details..."
                  autoComplete="current-password"
                />
                <CFormText className="help-block">
                  Please enter Details
                </CFormText>
              </CCol>
            </CFormGroup>

            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="hf-password">Change Status</CLabel>
              </CCol>
              <CCol md="9">
                <CFormGroup variant="checkbox" className="checkbox">
                  <CInputCheckbox
                    id="checkbox1"
                    name="checkbox1"
                    value="option1"
                  />
                  <CLabel
                    variant="checkbox"
                    className="form-check-label"
                    htmlFor="checkbox1"
                  >
                    disable
                  </CLabel>
                </CFormGroup>
                <CFormGroup variant="checkbox" className="checkbox">
                  <CInputCheckbox
                    id="checkbox2"
                    name="checkbox2"
                    value="option2"
                  />
                  <CLabel
                    variant="checkbox"
                    className="form-check-label"
                    htmlFor="checkbox2"
                  >
                    Enable
                  </CLabel>
                </CFormGroup>
              </CCol>
            </CFormGroup>
            <CRow>
              <CCol xs="6">
                <CButton
                  color="success"
                  className="px-4"
                  onClick={() => {
                    handelSubmit();
                  }}
                >
                  Update
                </CButton>
              </CCol>
            </CRow>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setSuccess(!success)}>
            Cancel
          </CButton>
        </CModalFooter>
      </CModal>
      <CModal
        show={success1}
        onClose={() => setSuccess1(!success1)}
        color="success"
      >
        <CModalHeader closeButton>
          <CModalTitle>Add New Offer</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm action="" method="post" className="form-horizontal">
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="hf-email">Heading Title</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput
                  type="text"
                  id="hf-email"
                  name="hf-email"
                  placeholder="Heading Title..."
                />
                <CFormText className="help-block">
                  Please enter heading title
                </CFormText>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="hf-email">Offer Title</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput
                  type="text"
                  id="hf-email"
                  name="hf-email"
                  placeholder="Offer Title..."
                />
                <CFormText className="help-block">
                  Please enter offer title
                </CFormText>
              </CCol>
            </CFormGroup>

            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="hf-password">Details</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput
                  type="text"
                  id="hf-password"
                  name="hf-password"
                  placeholder="Details..."
                  autoComplete="current-password"
                />
                <CFormText className="help-block">
                  Please enter Details
                </CFormText>
              </CCol>
            </CFormGroup>

            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="hf-password">Select Status</CLabel>
              </CCol>
              <CCol md="9">
                <CFormGroup variant="checkbox" className="checkbox">
                  <CInputCheckbox
                    id="checkbox1"
                    name="checkbox1"
                    value="option1"
                  />
                  <CLabel
                    variant="checkbox"
                    className="form-check-label"
                    htmlFor="checkbox1"
                  >
                    disable
                  </CLabel>
                </CFormGroup>
                <CFormGroup variant="checkbox" className="checkbox">
                  <CInputCheckbox
                    id="checkbox2"
                    name="checkbox2"
                    value="option2"
                  />
                  <CLabel
                    variant="checkbox"
                    className="form-check-label"
                    htmlFor="checkbox2"
                  >
                    Enable
                  </CLabel>
                </CFormGroup>
              </CCol>
            </CFormGroup>
            <CRow>
              <CCol xs="6">
                <CButton
                  color="success"
                  className="px-4"
                  onClick={() => {
                    handelSubmit();
                  }}
                >
                  Submit
                </CButton>
              </CCol>
            </CRow>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setSuccess1(!success1)}>
            Cancel
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default OfferPopup;
