import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ModalStructure, UiStructure } from "./types";

const initialUiState: UiStructure = {
  isLoading: false,
  modal: {
    isError: false,
    isVisible: false,
    title: "",
    text: "",
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    showLoading: (currentState: UiStructure): UiStructure => ({
      ...currentState,
      isLoading: true,
    }),
    hideLoading: (currentState: UiStructure): UiStructure => ({
      ...currentState,
      isLoading: false,
    }),
    showModal: (
      currentState: UiStructure,
      action: PayloadAction<ModalStructure>
    ): UiStructure => ({
      ...currentState,
      modal: {
        isVisible: action.payload.isVisible,
        isError: action.payload.isError,
        title: action.payload.title,
        text: action.payload.text,
      },
    }),
    hideModal: (): UiStructure => ({
      ...initialUiState,
      modal: { isError: false, title: "", text: "", isVisible: false },
    }),
  },
});

export const {
  showLoading: showLoadingActionCreator,
  hideLoading: hideLoadingActionCreator,
  showModal: showModalActionCreator,
  hideModal: hideModalActionCreatorhide,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
