export interface UiStructure {
  isLoading: boolean;
  modal: ModalStructure;
}

export interface ModalStructure {
  isVisible: boolean;
  isError: boolean;
  title: string;
  text: string;
}
