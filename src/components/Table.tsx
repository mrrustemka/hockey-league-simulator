import { getTeams } from "../data/getTeams";
import { useEffect } from "react";

export function Table() {
  useEffect(() => {
    function theTable() {
      console.log(getTeams);
    }
    theTable();
  }, []);
}

export default Table;
