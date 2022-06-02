import { FC, useMemo } from "react";

import libraries from "../data/libraries";

type Props = { category: string };

export default ({ category }: Props) => {
  const filteredLibraries = useMemo(
    () => libraries.filter((library) => library.categories.includes(category)),
    [libraries, category]
  );

  return (
    <div>
      {filteredLibraries.map((library) => (
        <div key={library.name}>{library.name}</div>
      ))}
    </div>
  );
};
