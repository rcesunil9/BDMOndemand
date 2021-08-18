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
  CTooltip,
  CInputFile,
} from "@coreui/react";

import CIcon from "@coreui/icons-react";
const usersData = [
  {
    no: "1",
    title: "Ranna",
    sub_title: "Your Kitchen Away From Home",
    detail:
      "“Food perfection has always been our passion.Genuine consideration to enhance flavour and taste has led us to establi..",
    image: "",
    status: "pending",
    action: "",
  },
  {
    no: "2",
    title: "Ranna",
    sub_title: "Your Kitchen Away From Home",
    detail:
      "“Food perfection has always been our passion.Genuine consideration to enhance flavour and taste has led us to establi..",
    image: "",
    status: "pending",
    action: "",
  },
  {
    no: "3",
    title: "Ranna",
    sub_title: "Your Kitchen Away From Home",
    detail:
      "“Food perfection has always been our passion.Genuine consideration to enhance flavour and taste has led us to establi..",
    image: "",
    status: "pending",
    action: "",
  },
  {
    no: "3",
    title: "Ranna",
    sub_title: "Your Kitchen Away From Home",
    detail:
      "“Food perfection has always been our passion.Genuine consideration to enhance flavour and taste has led us to establi..",
    image: "",
    status: "pending",
    action: "",
  },
  {
    no: "4",
    title: "Ranna",
    sub_title: "Your Kitchen Away From Home",
    detail:
      "“Food perfection has always been our passion.Genuine consideration to enhance flavour and taste has led us to establi..",
    image: "",
    status: "pending",
    action: "",
  },
  {
    no: "5",
    title: "Ranna",
    sub_title: "Your Kitchen Away From Home",
    detail:
      "“Food perfection has always been our passion.Genuine consideration to enhance flavour and taste has led us to establi..",
    image: "",
    status: "pending",
    action: "",
  },
  {
    no: "6",
    title: "Ranna",
    sub_title: "Your Kitchen Away From Home",
    detail:
      "“Food perfection has always been our passion.Genuine consideration to enhance flavour and taste has led us to establi..",
    image: "",
    status: "pending",
    action: "",
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
  "no",
  "title",
  "sub_title",
  "image",
  "detail",
  "status",
  "action",
];

const AboutUs = () => {
  const [success, setSuccess] = useState(false);
  const [success1, setSuccess1] = useState(false);
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader className="d-flex  flex-row justify-content-between">
              {" "}
              <h6>About Us</h6>
              <CTooltip content="Add New Sliders">
                <CButton
                  color="success"
                  className="d-flex justify-content-end"
                  size="sm"
                  onClick={() => setSuccess1(!success1)}
                >
                  <i class="fas fa-plus mr-1" /> Add New
                </CButton>
              </CTooltip>
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={usersData}
                fields={fields}
                hover
                striped
                bordered
                size="sm"
                itemsPerPage={4}
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

                      <CTooltip content="Edit Sliders">
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
          <CModalTitle>Edit About Us</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm action="" method="post" className="form-horizontal">
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="hf-email">Title</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput
                  type="text"
                  id="hf-email"
                  name="hf-email"
                  placeholder="Heading Title..."
                />
                <CFormText className="help-block">Please enter title</CFormText>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="hf-email">Sub Title</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput
                  type="text"
                  id="hf-email"
                  name="hf-email"
                  placeholder="Offer Title..."
                />
                <CFormText className="help-block">
                  Please enter sub title
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
              </CCol>
            </CFormGroup>

            <CFormGroup row>
              <CLabel col md="3" htmlFor="file-input">
                image upload
              </CLabel>
              <CCol xs="12" md="9">
                <CInputFile id="file-input" name="file-input" />
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
          <CModalTitle>Add New Sliders</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm action="" method="post" className="form-horizontal">
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="hf-email">Title</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput
                  type="text"
                  id="hf-email"
                  name="hf-email"
                  placeholder="Heading Title..."
                />
                <CFormText className="help-block">Please enter title</CFormText>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="hf-email">Sub Title</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput
                  type="text"
                  id="hf-email"
                  name="hf-email"
                  placeholder="Offer Title..."
                />
                <CFormText className="help-block">
                  Please enter sub title
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
              </CCol>
            </CFormGroup>

            <CFormGroup row>
              <CLabel col md="3" htmlFor="file-input">
                image upload
              </CLabel>
              <CCol xs="12" md="9">
                <CInputFile id="file-input" name="file-input" />
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
          <CButton color="secondary" onClick={() => setSuccess1(!success1)}>
            Cancel
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default AboutUs;
