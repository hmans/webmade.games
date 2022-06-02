import { Library } from "../types";

type Props = { library: Library };

export default ({ library }: Props) => {
  return <div>{library.name}</div>;
};
