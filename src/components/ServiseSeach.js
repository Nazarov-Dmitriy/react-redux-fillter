import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { changeValue, serviseSeach } from "../redux/actionCreate";

const ServiseSeach = () => {
  const dispatch = useDispatch();
  const serviseList = useSelector((state) => state.serviseList);


  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(changeValue(name, value));
    dispatch(serviseSeach(serviseList, value));
  };


  return (
    <div className="seacrh">
      <input name="search" onChange={handleChange} />
      <button>Поиск</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    serviseAdd: state.serviseAdd,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiseSeach);
