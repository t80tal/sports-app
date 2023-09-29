export interface dataType {
  title: string;
  isMoney: boolean;
  link: string;
  icon: any;
}

export interface ProductInputsType {
  id: number;
  label: string;
  type: string;
  placeholder: string;
}

export interface UserInputsType {
  id: number;
  label: string;
  type: string;
  placeholder?: string;
}
