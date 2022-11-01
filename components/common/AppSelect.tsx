import type { NextPage } from "next";
import Select from "react-select";

interface Props {
  option: any;
  onChange: () => void;
  defaultValue: string;
  placeholder:string
}

const AppSelect: NextPage<Props> = (props) => {
  return (
    <div>
      <Select
        placeholder={props.placeholder}
        options={props.option}
        onChange={props.onChange}
        defaultValue={props.defaultValue}
      />
    </div>
  );
};

export default AppSelect;
