import { useRef } from "react";
import { useIsVisible } from "../../../hooks/useIsVisible";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import HomeCell from "./HomeCell";

const HomeGrid = () => {
  const CELL_SIZE = 80;
  const ref = useRef();
  const visible = useIsVisible(ref);

  return (
    <div
      ref={ref}
      className="relative grid select-none grid-cols-2 grid-rows-2 border border-r-0 border-t-0 border-[#ededed]"
      style={{
        width: CELL_SIZE,
        height: CELL_SIZE,
      }}
    >
      {visible && (
        <>
          <HomeCell classes="border-r border-r-[#ededed]" />
          <HomeCell />
          <HomeCell classes="border-t border-t-[#ededed] border-r border-r-[#ededed]" />
          <HomeCell classes="border-t border-t-[#ededed]" />

          <FontAwesomeIcon
            icon="fa-solid fa-plus"
            className="absolute m-[30px] text-xl leading-[21px] text-neutral-300"
          />
        </>
      )}
    </div>
  );
};

export default HomeGrid;
